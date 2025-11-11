import mongoose from "mongoose";

const uri = process.env.PORTFOLIOPREV_DB_URI as string;
let connection: mongoose.Connection;

export const connectPortfolioPrevDB = async () => {
  if (!connection) {
    connection = await mongoose.createConnection(uri).asPromise();
  }
  return connection;
};