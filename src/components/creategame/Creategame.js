import React, { useState } from "react";
import "./Creategame.css";
import rockImage from "../rockImage/rock.png";
import paperImage from "../paperImage/paper.png";
import scissorImage from "../scissorImage/scissor.png";

const Creategame = () => {
  return (
    <section id="create_multiplayer">
      <div className="container">
        <h1 className=" py-4 title">ROCK PAPER & SCISSORS GAME</h1>
        <div id="initial" className=" col-md-6">
          <img  src={rockImage} alt="Rock" />
          <img  src={paperImage} alt="Paper" />
          <img  src={scissorImage} alt="Scissor" />
        
          <button className="form-control btn" onclick="createGame()">
            Create Multiplayer Game
          </button>
          <input
            className="form-control my-2"
            placeholder="Enter Code here"
            type="text"
            name=""
            id="roomUniqueId"
          />
          <button className="form-control btn" onclick="joinGame()">
            Join Game
          </button>
        </div>
      </div>
    </section>
  );
};
export default Creategame;
