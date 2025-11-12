import mongoose, { Schema } from "mongoose";
import {connectBlogsDB}from '@/database/dbBlog';

// typescript type (can also be an interface)
type Blog = {
		title: string;
	  slug: string; 
		date: Date;
		description: string; // for preview
	  image: string; // url for string in public
	  imageAlt: string; // alt for image
	  drake: string;
};


// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		slug: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
	  	imageAlt: { type: String, required: true },
		drake: { type: String, required: false  },
})

//defining the collection and model
// const Blog = mongoose.models['blogs'] ||
//     mongoose.model('blogs', blogSchema);

// export default Blog;

const getBlogModel = async () => {
  const connection = await connectBlogsDB();
  return connection.model("Blog", blogSchema, "blogs"); // 👈 Explicit collection name
};

export default getBlogModel;