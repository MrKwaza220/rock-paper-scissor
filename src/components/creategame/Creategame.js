import React, { useState } from "react";
import "./Creategame.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

const Creategame = () => {
  return (
    <section id="create_multiplayer">
      <div className="container">
        <h1 className="create_title">ROCK PAPER & SCISSORS GAME</h1>
        <div className="create_game">

            {/* Images */}
          <div className="create_images">
            <img src={rockImage} alt="Rock" />
            <img src={paperImage} alt="Paper" />
            <img src={scissorImage} alt="Scissor" />
          </div>
           
           {/**** create button ****/}
          <button
            className="create_button creategame_btn"
            onclick="createGame()"
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
          <button className="join_button creategame_btn" onclick="joinGame()">
            Join Game
          </button>
        </div>
      </div>
    </section>
  );
};
export default Creategame;
