import Image from "next/image";

export default function Home() {
  return (
    <main className="center">
        <h1 className="center">About Me</h1>
          <div className="center">
             {/* Image Section */}
             <br />
            <div className="centerImage">
                <Image 
                src="https://live.staticflickr.com/4098/4858174459_e2d0d62b31_c.jpg" 
                alt="An image of me" 
                width={300} 
                height={400}
                className="centerImage"
                />
            </div>
            <br />
            {/* Text Section */}
            <div className="text-lg space-y-4">
            <p>
                Hey! My name is Taye Staats and I am a first year Computer Science student at <em>Cal Poly</em>.</p>
                <p>I am from Bellevue Washington and have lived there my whole life until now.</p>
                <p>My hobbies include playing and watching football and baseball, playing video games, hiking, and coding.
            </p>
          </div>
        </div>
        <br />
        <footer className="mt-8 text-sm text-center"> 
            © 2025 My Personal Website | All Rights Reserved | Made with love ♥
        </footer>
    </main>
  );
}
