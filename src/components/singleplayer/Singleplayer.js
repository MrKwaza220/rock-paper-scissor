import React, { useState } from "react";
import "./Singleplayer.css";

import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

//function to handle game logic when an option is clicked
const Singleplayer = () => {
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [userChoice, setUserChoice] = useState(rockImage);
  const [cpuChoice, setCpuChoice] = useState(rockImage);
  const [result, setResult] = useState("Let's play");

  const options = [
    { name: 'Rock', image: rockImage },
    { name: 'Paper', image: paperImage },
    { name: 'Scissors', image: scissorImage }
  ];

  //function to handle game logic when an option is clicked
  const playGame = (index) => {
    //Get user choice and set user's image accordingly
    const userValue = options[index].name;
    setUserChoice(options[index].image);
    
    //Generate random CPU choice and set CPU's image accordingly
    const randomNumber = Math.floor(Math.random() * 3);
    const cpuValue = options[randomNumber].name;
    setCpuChoice(options[randomNumber].image);

    //Define outcomes based on user and CPU choices
    const outcomes = {
      Rock: { Rock: "Draw", Paper: "Cpu", Scissors: "User" },
      Paper: { Rock: "User", Paper: "Draw", Scissors: "Cpu" },
      Scissors: { Rock: "Cpu", Paper: "User", Scissors: "Draw" }
    };

    //Determine the result and update the state
    const outcomeValue = outcomes[userValue][cpuValue];
    setResult(outcomeValue === "Draw" ? "Match Draw" : `${outcomeValue} Won!!`);

    //Update scores based on the outcomes
    if (outcomeValue === "User") {
     setUserScore(prevScore => prevScore + 1);

     //check if the user has reached a score of 5
     if (userScore + 1 === 5){
       setResult("User Computer");
       setUserScore(0);
       setCpuScore(0);
     }
    }
    else if (outcomeValue === "Cpu"){
      setCpuScore(prevScore => prevScore + 1);

      //Check if the CPU has reached a score of 5
      if(cpuScore +1 === 5){
        setResult("Computer Won");
        setUserChoice(0);
        setCpuScore(0);
      }
    }  
  };

  return (
    <section id="single_player">
      <div className="container">
        <div className="result_field">
          <div className="score_result">
            <div>
              User Score: <span className="user_score">{userScore}</span>
            </div>
            <div>
              CPU Score: <span className="cpu_score">{cpuScore}</span>
            </div>
          </div>
          <div className="result_images">
            <span className="user_result">
              <img src={userChoice} alt="User choice" />
            </span>
            <span className="cpu_result">
              <img src={cpuChoice} alt="CPU choice" />
            </span>
          </div>
          <div className="result">{result}</div>
        </div>
        <div className="option_images">
          {options.map((option, index) => (
            <span className="option_image" key={index} onClick={() => playGame(index)}>
              <img src={option.image} alt={option.name} />
              <p>{option.name}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Singleplayer;
