import React, { useState } from 'react'
import '../App.css'
const About = () => {
    
    const[result, setResult] = useState('')
    const handleRock = () =>{
        const num = Math.floor(Math.random() * 3);
            if (num===0) {
                setResult("Match Tied");
            }
            else if (num===1) {
                setResult("You Loss");
            }
            else {
                setResult("You Won")
            }
    };
    
    const handlePaper = () =>{
        const num = Math.floor(Math.random() * 3);
            if (num===1) {
                setResult("Match Tied");
            }
            else if(num===2) {
                setResult("You Loss");
            }
            else {
                setResult("You Won")
            }
    };
    
    const handleScissor = () =>{
        const num = Math.floor(Math.random() * 3);
            if (num===2) {
                setResult("Match Tied");
            }
            else if(num===0) {
                setResult("You Loss");
            }
            else{
                setResult("You Won");
            }
            
    };
  return (
    <div>
      <button className='bbtn' onClick={handleRock}>Rock</button>
      <button className='bbtn' onClick={handlePaper}>Paper</button>
      <button className='bbtn' onClick={handleScissor}>Scissor</button>
      <p>{result}</p>
    </div>
  );
};
export default About