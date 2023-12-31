import React, { useState } from "react";
import "../App.css";
import RockImage from "./Images/Rock.jpeg";
import PaperImage from "./Images/Paper.jpg";
import ScissorImage from "./Images/Scissor.jpeg";
const About = () => {
    const [top, setTop] = useState("  Click on your choice!");
    const [result, setResult] = useState("");
    const [ver, setVer] = useState("");
    const [oop, setOop] = useState("");
    const handleRock = () => {
        const num = Math.floor(Math.random() * 3);
        if (num === 0) {
            setResult("Match Tied");
            setOop("Opponent Choice: Rock");
        } else if (num === 1) {
            setResult("You Loss");
            setOop("Opponent Choice: Paper");
        } else {
            setResult("You Won");
            setOop("Opponent Choice: Scissor");
        }
        setTop("         Click Again!");

        setVer("Your Choice: Rock");
    };
    const handlePaper = () => {
        const num = Math.floor(Math.random() * 3);
        if (num === 1) {
            setResult("Match Tied");
            setOop("Opponent Choice: Paper");
        } else if (num === 2) {
            setResult("You Loss");
            setOop("Opponent Choice: Scissor");
        } else {
            setResult("You Won");
            setOop("Opponent Choice: Rock");
        }

        setTop("         Click Again!");

        setVer("Your Choice: Paper");
    };
    const handleScissor = () => {
        const num = Math.floor(Math.random() * 3);
        if (num === 2) {
            setResult("Match Tied");
            setOop("Opponent Choice: Scissor");
        } else if (num === 0) {
            setResult("You Loss");
            setOop("Opponent Choice: Rock");
        } else {
            setResult("You Won");
            setOop("Opponent Choice: Paper");
        }

        setTop("         Click Again!");

        setVer("Your Choice: Scissor");
    };
    let resultColor = "";
    if (result === "You Won") {
        resultColor = "green";
    } else if (result === "You Loss") {
        resultColor = "red";
    }
    if (result === "Match Tied") {
        resultColor = "purple";
    }
    return (
        <div className="res">
            <h2 style={{ whiteSpace: "pre" }}>{top}</h2>
            <div className="container">
                <div className="ii">
                <img src={RockImage} alt="Rock" onClick={handleRock} />
                <img src={PaperImage} alt="Paper" onClick={handlePaper} />
                <img src={ScissorImage} alt="Scissor" onClick={handleScissor} />
                </div>
                <div className="ip">
                    <p className="one" style={{ color: resultColor }}>
                        {result}
                    </p>
                    <p className="two">{ver}</p>
                    <p>{oop}</p>
                </div>
            </div>
        </div>
    );
};
export default About;
