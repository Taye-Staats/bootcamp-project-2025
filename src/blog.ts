// Creating the Blog Type
type Blog = {
    title : string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}
// Creating are list of blogs
const blogs : Blog[] = [
    {
        title: "First Day of Classes at Cal Poly!",
        date: "September 18th 2025",
        description: "Today was my first day of classes ever at cal poly",
        image: "https://live.staticflickr.com/65535/54850906959_578dc2d546_c.jpg", 
        imageAlt: "Me in front of my dorm room on my first day",
        slug: "first-day-of-classes",
    },
    {
        title: "Visting Raku Ramen For The First Time",
        date: "October 11th 2025",
        description: "Went out to eat at Raku Ramen with the boys",
        image: "https://live.staticflickr.com/65535/54850987500_0f52966993_b.jpg",
        imageAlt: "The boys and me",
        slug: "raku-ramen"
    },
];
// Creating the actual blogs
function createBlogs(blogs : Blog[]): void {
    const blogContainer = document.getElementById('blog-container');
// Looping through each blog and adding there elements
    blogs.forEach((blog) => {
        const blogDiv = document.createElement('div');   
        blogDiv.className = "blog-post";

        blogDiv.innerHTML = `
        <h2>${blog.title}</h2>
        <p><em>${blog.date}</em></p>
        <img src="${blog.image}" alt="${blog.imageAlt}"/>
        <p>${blog.description}</p>
        <a href="${blog.slug}.html">Read more</a>
        `;
        blogContainer?.appendChild(blogDiv);
    })    
}
// Running the reate blogs function to make it all work
createBlogs(blogs)
