import mongoose, { Schema } from "mongoose";
import {connectPortfolioPageDB}from '@/database/dbPortfolioPage';

// typescript type (can also be an interface)
type PortfolioPage = {
    title: string;
    date: Date;
    description: string; // for preview
    image: string; // url for string in public
    image2: string;
    image3: string;
    alt: string; // alt for image
    alt2 : string;
    alt3 : string;
    githubLink : string;
    demoLink : string;
    linkInfo : string;
    linkInfo2 : string;
};


// mongoose schema 
const pageSchema = new Schema<PortfolioPage>({
        title: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
        image: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
        alt: { type: String, required: true },
        alt2: { type: String, required: true },
        alt3: { type: String, required: true },
        githubLink: { type: String, required: true },
        demoLink: { type: String, required: true },
        linkInfo: { type: String, required: true },
        linkInfo2: { type: String, required: true }

})

// defining the collection and model
// const Prev = mongoose.models['portfolioprev'] ||
//     mongoose.model('portfolioprev', prevSchema, 'portfolioprev');

// export default Prev;
const getPortfolioPageModel = async () => {
  const connection = await connectPortfolioPageDB();
  return connection.model("Portfolio", pageSchema, "portfolio");
};

export default getPortfolioPageModel;