import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"

type IParams = {
		params: {
			slug: string
		}
}
export async function GET(req: NextRequest, { params }: IParams) {
		// If { params } looks confusing, check the note below this code block
        const { slug } = params
		const connection = await connectDB();

        // ✅ Add this log right after connecting


	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}