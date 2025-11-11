import BlogPreview from '@/components/blogPreview';
import {connectBlogsDB}from '@/database/dbBlog';
import Blog from '@/database/blogSchema'
export default async function BlogPage() {
  const blogs = await getBlogs()
    await connectBlogsDB()
    console.log("✅ Connected to MongoDB")
    console.log("Fetched blogs:", blogs)
  return (
    <div className= "center" >
      <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
      <p className="mt-4 text-lg">Here’s where I share my thoughts and projects.</p>
      <br/>   
       <div className="mt-8 space-y-6">
        {blogs ? (
          blogs.map((blog) => (
            <BlogPreview
              
              key={blog._id}
              slug={blog.slug}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.imageAlt}
              date={new Date(blog.date).toLocaleDateString()}
            />
          ))
        ) : (
          <p className="text-red-500">Failed to load blogs. Please try again later.</p>
        )}
      </div>
    </div>
  );
}
async function getBlogs(){
	await connectBlogsDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 })
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}