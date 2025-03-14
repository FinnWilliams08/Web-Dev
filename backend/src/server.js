import express from "express";
import { initializeDbConnection } from "./db";
import { routes } from "./routes";
import { authMiddleware } from "./utils/authMiddleware";
import { protectedRoutes } from "./protectedRoutes";
import cors from "cors";
import { upload } from "./multerConfig";
 
const PORT = process.env.PORT || 8080;
const app = express();
 
// CORS configuration
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
  credentials: false,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};
 
// Apply CORS middleware
app.use(cors(corsOptions));
 
// Handle preflight OPTIONS requests
app.options('*', cors(corsOptions));
 
// Parse JSON body
app.use(express.json());
 
// Health check route
app.get("/ping", (req, res) => {
  res.send("PONG back at you... 😊");
});
 
// Product upload route
app.use("/api/product", cors(corsOptions), upload.single("productImage"), (req, res) => {
  const { title, price } = req.body;
  console.log(title, price);
  res.sendStatus(200);
});
 
// Apply regular routes
routes.map((route) => app[route.method](route.path, cors(corsOptions), route.handler));
 
// Apply auth middleware for protected routes
app.use("/", cors(corsOptions), authMiddleware);
 
// Apply protected routes
protectedRoutes.map((route) => app[route.method](route.path, cors(corsOptions), route.handler));
 
// Initialize database and start server
initializeDbConnection().then(() => {
  app.listen(PORT, () =>
    console.log(`MERN server is listening on port ${PORT}...`)
  );
});