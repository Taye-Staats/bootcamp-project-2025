import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className = {styles.siteTitle}>Taye's Site</div>
            <ul className = {styles.navList}>
                <li>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className={styles.navLink}>
                    Blog
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio" className={styles.navLink}>
                    Portfolio
                    </Link>
                </li> 
                <li>
                    <Link href="/resume" className={styles.navLink}>
                    Resume
                    </Link>
                </li> 
                <li>
                    <Link href="/contact" className={styles.navLink}>
                    Contact
                    </Link>
                </li>    
            </ul>
        </header>    
            
    );
}