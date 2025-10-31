export default function Contact() {
    return (
        <>
         <main>
            <h1> Contact</h1>
            <form id = "contact-form" >
                <label htmlFor="name">Name:</label>
                <input type = "text" id = "name" className = "background"  />
                <label htmlFor="email">Email:</label>
                <input type = "email" id = "email" className = "background" />
                <label htmlFor="message">Message:</label>
                <input type = "message" className = "background" />
                <br />
                <input type = "submit" className = "submit" />
            </form>
        </main>
        <footer className = "footer"> 
            © 2025 My Personal Website | All Rights Reserved | Made with love ♥
        </footer>
        </>
    );
}