import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import {Blog} from "../blogData"
import Link from "next/link"; 
import styles from "./blogPreview.module.css"

type BlogProps  = {
    title: string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: BlogProps) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        
        <div className={style.center}>
            <h3>{title} </h3>
        <div>
            <p><strong>Date:</strong>{date}</p>
			<Image src={image} alt={imageAlt} width={500} height={500} className ={styles.centerImage} ></Image>
            <p>{description}</p>
            <Link href={`/blog/${slug}`} className={styles.readMoreLink}>
                <h3>Read More</h3>
            </Link>
            <br/>   
        </div>
	    </div>   
  );
}

