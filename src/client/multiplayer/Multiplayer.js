import React, { useState, useEffect } from "react";
import "./Multiplayer.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

const Multiplayer = () => {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [result, setResult] = useState("Let's play");
  const [playerOneChoice, setPlayerOneChoice] = useState(rockImage);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(rockImage);
  const { roomId } = useParams();

  const socket = io();

  useEffect(() => {
    // Event handler for opponent's choice
    socket.on("p1Choice", (data) => {
      setPlayerOneChoice(data.rpsValue);
    });

    // Event handler for game result
    socket.on("result", (data) => {
      setResult(data.winner);
      if (data.winner === "p1") {
        setPlayerOneScore((prevScore) => prevScore + 1);
      } else if (data.winner === "p2") {
        setPlayerTwoScore((prevScore) => prevScore + 1);
      }
    });

    // Clean up event listeners
    return () => {
      socket.off("p1Choice");
      socket.off("result");
    };
  }, [socket]);

  const playGame = (index) => {
    const options = [rockImage, paperImage, scissorImage];
    const userChoice = options[index];
    setPlayerOneChoice(userChoice);

    const randomNumber = Math.floor(Math.random() * 3);
    const opponentChoice = options[randomNumber];
    setPlayerTwoChoice(opponentChoice);

    const outcome = calculateOutcome(index, randomNumber);
    setResult(outcome);
    socket.emit("p1Choice", { roomUniqueId: roomId, rpsValue: userChoice });
    socket.emit("p2Choice", { roomUniqueId: roomId, rpsValue: opponentChoice });
  };

  const calculateOutcome = (playerOneIndex, playerTwoIndex) => {
    const outcomes = ["Draw", "p2", "p1"];
    const outcomeIndex = (playerOneIndex - playerTwoIndex + 3) % 3;
    return outcomes[outcomeIndex];
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
                  Player One: <span className="playerOne_score">{playerOneScore}</span>
                </div>
                <div>
                  Player Two: <span className="playerTwo_score">{playerTwoScore}</span>
                </div>
              </div>
              <div className="result_images">
                <span className="playerOne_result">
                  <img src={playerOneChoice} alt="Player One Choice" />
                </span>
                <span className="playerTwo_result">
                  <img src={playerTwoChoice} alt="Player Two Choice" />
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
