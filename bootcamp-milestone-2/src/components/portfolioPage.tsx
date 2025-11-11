import Link from "next/link"; 
import Image from 'next/image';
import styles from "./blogPreview.module.css"

type PortfolioProps  = {
    title: string;
    date : string;
    description : string;
    image : string;
    alt : string;
    alt2: string;
    alt3: string;
    image2 : string;
    image3 : string;
    linkInfo : string;
    linkInfo2 : string;
    githubLink : string;
    demoLink : string;
    imageAlt : string;

}

export default function PortfolioPage({ title, date, description, image, image2, image3, linkInfo, linkInfo2
                                    , githubLink, demoLink, imageAlt, alt, alt2, alt3 }: PortfolioProps) {
    console.log("Image prop:", image)
    console.log("Alt prop:", imageAlt)
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        
        <div className="center">
            <h3>{title} </h3>
        <div>
            <p><strong>Date:</strong>{date}</p>
			<Image src={image} alt={alt} width={500} height={700} className = "centerImage" ></Image>
            <Image src={image2} alt={alt2} width={500} height={700} className = "centerImage" ></Image>
            <Image src={image3} alt={alt3} width={500} height={700} className = "centerImage" ></Image>
            <p>{description}</p>
            <p><strong>{linkInfo}</strong></p>
            <div className={styles.readMoreLink}>
            <Link href={githubLink}>Repo</Link>
            </div>
            <p><strong>{linkInfo2}</strong></p>
            <div className={styles.readMoreLink}>
            <Link href={demoLink}>Demo</Link>
            </div>
            <div className="center goBackLink">
            <Link href="/blog">GO BACK</Link>
            </div>
            <br/>   
        </div>
	    </div>   
  );
}

