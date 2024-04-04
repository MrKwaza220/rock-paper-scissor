import React, { useState } from "react";
import "./Multiplayer.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

const Multiplplayer = () => {
  //State for scores
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  //State for game result
  const [result, setResult] = useState("Let's play");

  //State for user and CPU choices
  const [userChoice, setUserChoice] = useState(rockImage);
  const [cpuChoice, setCpuChoice] = useState(rockImage);

  //Function to handle the game logic
  const playGame = (index) => {
    //Array of images for options
    const options = [rockImage, paperImage, scissorImage];

    //User choice
    const userImageSrc = options[index];
    setUserChoice(userImageSrc);

    //CPU choice
    const randomNumber = Math.floor(Math.random() * 3);
    const cpuImageSrc = options[randomNumber];
    setCpuChoice(cpuImageSrc);

    //Determine winner
    const outcomes = ["Draw", "Cpu", "User"];
    const outcomesIndex = (index - randomNumber + 3) % 3;
    const outcome = outcomes[outcomesIndex];

    //Update result and scores
    setResult(outcome === "Draw" ? "Match Draw" : `${outcome} Won!!`);
    if (outcome === "User") setUserScore(userScore + 1);
    else if (outcome === "Cpu") setCpuScore(cpuScore + 1);
  };

  return (
    <section id="multiplayer">
      <div className="container">
        <h1>multiplayer Game</h1>
        <div className="multiplayer_home">
          <div className="multi_container">
            <div className="result_field">
              <div className="score_result">
                <div>
                  User Score:
                  <span className="user_score"> {userScore}</span>
                </div>

                <div>
                  <span className="cpu_score">{cpuScore} </span>
                  :CPU Score
                </div>
              </div>
              <div className="result_images">
                <span className="user_result">
                  <image src={userChoice} alt="User choice" />
                </span>
                <span className="cpu_result">
                  <image src={cpuChoice} alt="CPU choice" />
                </span>
              </div>
              <div className="result">{result}</div>
            </div>
            <div className="option_images">
              <span className="option_image" onclick={() => playGame(0)}>
                <img src={rockImage} alt="Rock" />
                <p>Rock</p>
              </span>

              <span className="option_image" onclick={() => playGame(1)}>
                <img src={paperImage} alt="Papper" />
                <p>Paper</p>
              </span>

              <span className="option_image" onclick={() => playGame(2)}>
                <img src={scissorImage} alt="Scissors" />
                <p>Scissors</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multiplplayer;
