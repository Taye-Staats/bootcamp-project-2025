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

}

export default function PortfolioPage({ title, date, description, image, image2, image3, linkInfo, linkInfo2
                                    , githubLink, demoLink,  alt, alt2, alt3 }: PortfolioProps) {
    console.log("Image prop:", image)
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        
        <div className="center">
            <h3>{title} </h3>
        <div>
            <p><strong>Date:</strong>{date}</p>
            <div className = "imageRow">
			<Image src={image} alt={alt} width={200} height={300}></Image>
            <Image src={image2} alt={alt2} width={200} height={300} ></Image>
            <Image src={image3} alt={alt3} width={200} height={300} ></Image>
            </div>
            <p>{description}</p>
            <p><strong>{linkInfo}</strong></p>
            <div className={styles.readMoreLink}>
            {githubLink ? (
                <Link href={githubLink}>Repo</Link>
            ) : (
                <p className="text-red-500">GitHub link not available</p>
            )}
            </div>
            <p><strong>{linkInfo2}</strong></p>
            <div className={styles.readMoreLink}>
            {demoLink ? (
                <Link href={demoLink}>Demo</Link>
            ) : (
                <p className="text-red-500">Demo link not available</p>
            )}
            </div>
            <div className="center goBackLink">
            <Link href="/portfolio">GO BACK</Link>
            </div>
            <br/>   
        </div>
	    </div>   
  );
}

