import mongoose from "mongoose";

const uri = process.env.BLOGS_DB_URI as string;
let connection: mongoose.Connection;

export const connectBlogsDB = async () => {
  if (!connection) {
    connection = await mongoose.createConnection(uri).asPromise();
  }
  return connection;
};
