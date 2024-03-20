import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home">
      <div className="home_background">
        <div className="container">
          <h1>ROCK PAPER SCISSOR GAME</h1>
          <p>Let's play</p>

          <div className="home_page">
          
          <Link to="/singleplayer" className="single_multi">
            
            <p>Singleplayer</p>
          
          </Link>
          <p>OR</p>
          <Link to="/multiplayer" className="single_multi">
            <p>Multiplayer</p>
          </Link>
             
             
             {/* <button>
              <a href="#single_player">

              </a><Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
              Single player
             </button>

             <button>
              <a href="#">

              </a>
              Multiplayer
             </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
