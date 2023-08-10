import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
    try {
        const mongod = await MongoMemoryServer.create();
        const getUrl = mongod.getUri();

        const db = await mongoose.connect(getUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

export default connect;
