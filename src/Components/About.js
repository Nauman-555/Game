import React, { useState } from 'react'
import '../App.css'
import RockImage from './Images/Rock.jpeg'
import PaperImage from './Images/Paper.jpg'
import ScissorImage from './Images/Scissor.jpeg'
const About = () => {
    const[top, setTop] = useState("Click on your choice!")
    const[result, setResult] = useState('')
    const[imageVariables, setImageVariables] = useState(true)
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
            setTop("");
            setImageVariables(false);
            setTimeout(() => {
                setTop("     "+"    Click Again!")
                setImageVariables(true);
               }, 2000);
            
               setTimeout(() => {
                setResult('');
               }, 2000);
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
            
            setTop("");
            setImageVariables(false);
            setTimeout(() => {
                setTop("     "+"    Click Again!")
                setImageVariables(true);
               }, 2000);
            
            // Clear the result after 2 second
            setTimeout(() => {
                setResult('');
               }, 2000);
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
            
            setTop("");
            setImageVariables(false);
            setTimeout(() => {
                setTop("     "+"    Click Again!")
                setImageVariables(true);
               }, 2000); 

                 setTimeout(() => {
                 setResult('');
                }, 2000);
    };

     // Use useEffect to set the top back after 2 seconds
 
    console.log('Top:', top);
    let resultColor= "";
    if(result=== 'You Won'){
        resultColor = 'green';
    }
    else if(result=== 'You Loss'){
        resultColor = 'red';
    }
    if(result=== 'Match Tied'){
        resultColor = 'purple';
    }

  return (
    <div className='container'>

<h2 style={{ whiteSpace: 'pre' }}>{top}</h2>  
{  
imageVariables && (<>
      <img src={RockImage} alt="Rock"  onClick={handleRock}/>
      <img src={PaperImage} alt="Paper" onClick={handlePaper}/>
      <img src={ScissorImage} alt="Scissor" onClick={handleScissor}/>
      </>)}      
      <p style={{color: resultColor}}>{result}</p>
    </div>
  );
};
export default About