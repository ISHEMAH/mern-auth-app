import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(){
    const mongod = await MongoMemoryServer.create()
    const getUrl = mongod.getUrl()

    const db = await mongoose.connect(getUrl)
    console.log("Database connected")
    return db
}

export default connect;