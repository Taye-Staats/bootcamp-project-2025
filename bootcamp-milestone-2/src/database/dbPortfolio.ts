// import mongoose from "mongoose";

// const uri = process.env.PORTFOLIOPREV_DB_URI as string;
// let connection: mongoose.Connection;

// export const connectPortfolioPrevDB = async () => {
//   if (!connection) {
//     connection = await mongoose.createConnection(uri).asPromise();
//   }
//   return connection;
// };
import mongoose from "mongoose";

const uri = process.env.PORTFOLIOPREV_DB_URI!;
let cachedConnection: mongoose.Connection | null = null;

export const connectPortfolioPrevDB = async (): Promise<mongoose.Connection> => {
  if (cachedConnection) return cachedConnection;

  cachedConnection = await mongoose.createConnection(uri).asPromise();
  return cachedConnection;
};