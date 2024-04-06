import React, { useState } from "react";
import "./Multiplayer.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

const Multiplayer = () => {
  // State for scores
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  // State for game result
  const [result, setResult] = useState("Let's play");

  // State for user and CPU choices
  const [playerOneChoice, setplayerOneChoice] = useState(rockImage);
  const [playerTwoChoice, setplayerTwoChoice] = useState(rockImage);

  // Function to handle the game logic
  const playGame = (index) => {
    // Array of images for options
    const options = [rockImage, paperImage, scissorImage];

    // User choice
    const userImageSrc = options[index];
    setplayerOneChoice(userImageSrc);

    // CPU choice
    const randomNumber = Math.floor(Math.random() * 3);
    const cpuImageSrc = options[randomNumber];
    setplayerTwoChoice(cpuImageSrc);

    // Determine winner
    const outcomes = ["Draw", "PlayerTwo", "PlayerOne"];
    const outcomeIndex = (index - randomNumber + 3) % 3;
    const outcome = outcomes[outcomeIndex];

    // Update result and scores
    setResult(outcome === "Draw" ? "Match Draw" : `${outcome} Won!!`);
    if (outcome === "PlayerOne") setPlayerOne(playerOne + 1);
    else if (outcome === "PlayerTwo") setPlayerTwo(playerTwo + 1);
  };

  return (
    <section id="multiplayer">
      <div className="container">
        <h1>Multiplayer Game</h1>
        <div className="multiplayer_home">
          <div className="multi_container">
            <div className="result_field">
              <div className="score_result">
                <div>
                  Player One: <span className="playerOne_score">{playerOne}</span>
                </div>
                <div>
                  Player Two: <span className="playerTwo_score">{playerTwo}</span>
                </div>
              </div>
              <div className="result_images">
                <span className="playerOne_result">
                  <img src={playerOneChoice} alt="PlayerOne Choice" />
                </span>
                <span className="playerTwo_result">
                  <img src={playerTwoChoice} alt="PlayerTwo Choice" />
                </span>
              </div>
              <div className="result">{result}</div>
            </div>
            <div className="option_images">
              <span className="option_image" onClick={() => playGame(0)}>
                <img src={rockImage} alt="Rock" />
                <p>Rock</p>
              </span>
              <span className="option_image" onClick={() => playGame(1)}>
                <img src={paperImage} alt="Paper" />
                <p>Paper</p>
              </span>
              <span className="option_image" onClick={() => playGame(2)}>
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

export default Multiplayer;
