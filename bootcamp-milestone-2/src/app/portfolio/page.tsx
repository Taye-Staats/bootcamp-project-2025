import Link from "next/link";
export default function portfolio () {
    return (
        <main>
            <h1 className = "center"> Portfolio</h1>
            <p className ="center"> I made a website in React and Next.js heres the link to the homepage</p>
            <div className ="center goBackLink">
                <Link href ="/">Home Page</Link>
            </div>
        </main>
    );
}