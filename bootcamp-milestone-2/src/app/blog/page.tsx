import BlogPreview from '@/components/blogPreview';
import blogs from '../../blogData';
export default function BlogPage() {
  return (
    <div className= "center" >
      <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
      <p className="mt-4 text-lg">Here’s where I share my thoughts and projects.</p>
      <br/>   
       <div className="mt-8 space-y-6">
        {blogs.map((blog) => (
          <BlogPreview
            slug={blog.slug}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            imageAlt={blog.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}