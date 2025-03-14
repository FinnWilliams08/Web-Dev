import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, firstName, lastName, location, password } = req.body;
    if (!email || !password || !firstName || !lastName || !location) {
      return res.sendStatus(500);
    }

    const db = getDbConnection("ecommerce");
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return res.sendStatus(409);
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      firstName,
      lastName,
      location,
    });

    const { insertedId } = result;

    jwt.sign(
      { uid: insertedId, email, firstName, lastName, location },
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (error, token) => {
        if (error) {
          return res.status(500).send(error);
        }
        res.status(200).json({ token });
      }
    );
  },
};