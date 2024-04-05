import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {


  return (
    <section id="home">
      <div className="home_background">
        <div className="container">
          <h1>ROCK PAPER SCISSOR GAME</h1>

          <div className="home_page">
          
          <Link to="single_player" className="single_multi">
            
           <p>Singleplayer</p>
          
          </Link>
          <p>OR</p>
          <Link to="/create_multiplayer" className="single_multi">
            <p>Multiplayer</p>
          </Link>
             
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
