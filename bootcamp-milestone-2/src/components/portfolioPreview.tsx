
import React from 'react';
import Image from 'next/image';
import Link from "next/link"; 
import styles from "./blogPreview.module.css"

type PortfolioPrevProps  = {
    title: string;
    date : string;
    description : string;
    image : string;
    imageAlt : string;
    slug : string;
}

export default function PortfolioPreview({ title, date, description, image, imageAlt, slug }: PortfolioPrevProps) {
    console.log("Image prop:", image)
    console.log("Alt prop:", imageAlt)
    return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
        
        <div className="center">
            <h3>{title} </h3>
        <div>
            <p><strong>Date:</strong>{date}</p>
      <Image src={image} alt={imageAlt} width={250} height={300} className ={styles.centerImage} ></Image>
            <p>{description}</p>
            <Link href={`/blog/${slug}`} className={styles.readMoreLink}>
                <h3>Read More</h3>
            </Link>
            <br/>   
        </div>
      </div>   
  );
}

