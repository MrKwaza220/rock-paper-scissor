import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div className="home_background">
        <div className="container">
          <h1>ROCK PAPER SCISSOR GAME</h1>
          <p>Let's play</p>

          <div className="home_page">
             <button>
              <a href="#">

              </a>
              Single player
             </button>

             <button>
              <a href="#">

              </a>
              Multiplayer
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
