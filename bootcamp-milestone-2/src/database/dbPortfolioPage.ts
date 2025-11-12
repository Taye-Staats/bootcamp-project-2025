import mongoose from "mongoose";

const uri = process.env.PORTFOLIOPAGE_DB_URI!;
let cachedConnection: mongoose.Connection | null = null;

export const connectPortfolioPageDB = async (): Promise<mongoose.Connection> => {
  if (cachedConnection) return cachedConnection;

  cachedConnection = await mongoose.createConnection(uri).asPromise();
  return cachedConnection;
};