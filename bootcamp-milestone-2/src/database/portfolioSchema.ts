import mongoose, { Schema } from "mongoose";
import {connectPortfolioPrevDB}from '@/database/dbPortfolio';

// typescript type (can also be an interface)
type PortfolioPrev = {
        title: string;
      slug: string; 
        date: Date;
        description: string; // for preview
      image: string; // url for string in public
      imageAlt: string; // alt for image
};


// mongoose schema 
const prevSchema = new Schema<PortfolioPrev>({
        title: { type: String, required: true },
        slug: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
        image: { type: String, required: true },
        imageAlt: { type: String, required: true },
})

// defining the collection and model
// const Prev = mongoose.models['portfolioprev'] ||
//     mongoose.model('portfolioprev', prevSchema, 'portfolioprev');

// export default Prev;
const getPortfolioModel = async () => {
  const connection = await connectPortfolioPrevDB();
  return connection.model("PortfolioPrev", prevSchema, "portfolioprev");
};

export default getPortfolioModel;