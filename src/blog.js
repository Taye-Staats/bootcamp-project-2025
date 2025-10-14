console.log("Blog script loaded!");
var blogs = [
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
function createBlogs(blogs) {
    var blogContainer = document.getElementById('blog-container');
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        blogDiv.className = "blog-post";
        blogDiv.innerHTML = "\n        <h2>".concat(blog.title, "</h2>\n        <p><em>").concat(blog.date, "</em></p>\n        <img src=\"").concat(blog.image, "\" alt=\"").concat(blog.imageAlt, "\"/>\n        <p>").concat(blog.description, "</p>\n        <a href=\"").concat(blog.slug, ".html\">Read more</a>\n        ");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
    });
}
createBlogs(blogs);
