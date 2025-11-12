import { NextRequest, NextResponse } from 'next/server'
import {connectBlogsDB}from '@/database/dbBlog';
import blogSchema from "@/database/blogSchema"
import getBlogModel from "@/database/blogSchema";

type IParams = {
		params: {
			slug: string
		}
}
export async function GET(req: NextRequest, { params }: IParams) {
		// If { params } looks confusing, check the note below this code block
        const { slug } = params
        // ✅ Add this log right after connecting



  try {
    const Blog = await getBlogModel(); // ✅ get the model
    const blog = await Blog.findOne({ slug }).orFail(); // ✅ query the model
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Blog fetch error:", err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}