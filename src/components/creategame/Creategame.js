import React, { useState, useEffect } from "react";
import "./Creategame.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

const Creategame = () => {
  const [roomUniqueId, setRoomUniqueId] = useState(null);
  const [waitingMessage, setWaitingMessage] = useState("");
  const history = useHistory();

  // Initialize a socket.io connection
  const socket = io();

  // Function to create a new game
  const createGame = () => {
    socket.emit("createGame");
  };

  // Function to join an existing game
  const joinGame = () => {
    const roomId = document.getElementById("roomUniqueId").value;
    socket.emit("joinGame", { roomUniqueId: roomId });
  };

  useEffect(() => {
    // Event handler for the "newGame" event
    socket.on("newGame", (data) => {
      setRoomUniqueId(data.roomUniqueId);
      setWaitingMessage(
        `Waiting for opponent, please share code ${data.roomUniqueId} to join`
      );
      history.push(`/multiplayer/${data.roomUniqueId}`);
    });

    // Clean up event listeners
    return () => {
      socket.off("newGame");
    };
  }, [socket, history]);

  return (
    <section id="create_multiplayer">
      <div className="container">
        <h1 className="create_title">ROCK PAPER & SCISSORS GAME</h1>
        <div className="create_game">
          {/*  Images */}
          <div className="create_images">
            <img src={rockImage} alt="Rock" />
            <img src={paperImage} alt="Paper" />
            <img src={scissorImage} alt="Scissor" />
          </div>

          {/**** create button ****/}
          <div className="button_input">
            <button
              className="create_button creategame_btn"
              onClick={createGame}
            >
              Create Multiplayer Game
            </button>

            {/* input field */}
            <input
              className="enter_code"
              placeholder="Enter Code here"
              type="text"
              name=""
              id="roomUniqueId"
            />
            {/*Joinning button */}
            <button className="join_button creategame_btn" onClick={joinGame}>
              Join Game
            </button>
          </div>
          <div id="waitingArea">{waitingMessage}</div>
        </div>
      </div>
    </section>
  );
};

export default Creategame;
