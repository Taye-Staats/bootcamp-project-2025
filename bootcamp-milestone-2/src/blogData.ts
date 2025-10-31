export interface Blog {
    title: string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}

const blogs: Blog[] = [
    {
        title: "First Day of Classes at Cal Poly!",
        date: "September 18th 2025",
        description: "Today was my first day of classes ever at cal poly",
        image: "https://live.staticflickr.com/65535/54850906959_b3386c24a9_c.jpg", 
        imageAlt: "Me in front of my dorm room on my first day",
        slug: "/first-day-of-classes",
    },
    {
        title: "Visting Raku Ramen For The First Time",
        date: "October 11th 2025",
        description: "Went out to eat at Raku Ramen with the boys",
        image: "https://live.staticflickr.com/65535/54850987500_0f52966993_b.jpg",
        imageAlt: "The boys and me",
        slug: "/raku-ramen"
    },
];

export default blogs;