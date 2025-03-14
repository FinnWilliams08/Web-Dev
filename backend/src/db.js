import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
 
let client;
 
const dbURI = process.env.MONGODB_URI || "";
 
export const initializeDbConnection = async () => {
    try {
        client = await MongoClient.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
 
export const getDbConnection = (dbName) => {
    if (!client) {
        console.error("Database connection not initialized.");
        return null;
    }
    return client.db(dbName);
};