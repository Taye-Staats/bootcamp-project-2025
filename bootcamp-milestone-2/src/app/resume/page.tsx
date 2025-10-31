
export default function ResumePage() {
    return (
        <>
            <main>
            <div className = "resume">
            <h1> Resume</h1>
            <a href="https://1drv.ms/b/c/0dbb735557547215/EX5dlo72YWRAq2CCtYOT2wEB1UHM3tLUgA92K-ec0FM6Fw?e=t4a5EY" className = "goBackLink" download>Download Resume</a>
                <section className = "section">
                    <h2 className = "section-title"> Education</h2>
                    <div className = "entry">
                        <h3 className ="entry-title"></h3>
                        <p className="entry-info"></p>
                        California Polytechnic State University | San Luis Obispo, CA
                        <br />Bachelor of Science in Computer Science (Expected Graduation: 2029)
                        <p></p>
                        <br />Bellevue High School | Bellevue, WA
                        <br />September 2021 – June 2025  
                        <br />•	GPA 3.85. Recipient of Student of the Month, February 2024.
                    </div>
                </section>
                <section className = "section">
                    <h2 className = "section-title">Work Experience</h2>
                    <div className = "entry">
                        <h3 className="entry-title"></h3>
                        <p className="entry-info"></p>
                        <p className="entry-description"></p>
                        Retail Sales Associate, Office Depot| Bellevue, WA
                        <br />July 17th, 2024 – March 3rd, 2025
                        <br />•	Provided excellent customer service.
                        <br />•	Exceed Expectations in rewards sign-ups.
                        <br />•	Learned the importance of teamwork and accountability.

                    </div>
                </section>
                <section className = "section">
                    <h2 className = "section-title"> Projects</h2>
                    <div className = "entry">
                        <h3 className="entry-title"></h3>
                        <p className="entry-info"></p>
                        <p className="entry-description"></p>
                        Text-Based Spreadsheet Application (Java, Eclipse)
                        <br />- Developed a lightweight spreadsheet program in Java, inspired by VisiCalc, to process and store text, numerical values, and basic formulas.
                        <br />- Implemented a command-line interface allowing users to edit and manipulate cell data dynamically.
                        <br />- Designed efficient data structures to track and update cells while maintaining structured column-row formatting.
                        <br />- Built real-time computation features, supporting percentages, average calculations, and expressions.
                        <p></p>
                        <br />3D Platformer – Solo Developer (C++ & Blueprints, Unreal Engine)
                        <br />- Designed and implemented level layouts.
                        <br />- Incorporated moving obstacle platforms with variable speed, rotation.
                        <br />- Implemented collision mechanics that dynamically interact with the player character.
                        <p></p>
                        <br />Maze Action Game – Solo Developer (GameMaker Studio 2)
                        <br />Built a 2-level 2D maze game featuring item pickups, destructible objects, and a multi-phase boss encounter.
                        <br />- Programmed enemy pathfinding, key-door mechanics, and explosion effects using GameMaker Language (GML).
                        <br />- Designed and scripted a boss with unique movement patterns and attack behavior to challenge player reflexes.
                        <br />- Focused on player feedback and pacing by gradually introducing new mechanics across levels.
                    </div>
                </section>
                <section className = "section">
                    <h2 className = "section-title">Coursework</h2>
                    <ul className = "coursework list"></ul>
                    Data Structures and Algorithms
                    <br/>5 in AP Computer Science A
                    <p></p>
                </section>
            </div>
        </main>
        <footer className = "footer">
            © 2025 My Personal Website | All Rights Reserved | Made with love ♥
        </footer>
        </>
    );
}