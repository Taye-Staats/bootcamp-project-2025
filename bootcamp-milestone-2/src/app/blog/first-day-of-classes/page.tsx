import BlogPreview from '@/components/blogPreview';
import blogs from '../../../blogData';
import Link from "next/link";
import Image from 'next/image';

type BlogProps  = {
    title: string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}

const blog = blogs[0]

export default function firstDay ({ title, date, description, image, imageAlt, slug }: BlogProps) {
    return (
        <div className="center">
            <h3>{blog.title} </h3>
        <div>
            <p><strong>Date:</strong>{blog.date}</p>
			<Image src={blog.image} alt={blog.imageAlt} width={500} height={500} className ="centerImage" ></Image>
            <p>{blog.description}</p>
        </div>
        <div className="center goBackLink">
            <Link href="/blog">GO BACK</Link>
        </div>
        </div>
    );
}