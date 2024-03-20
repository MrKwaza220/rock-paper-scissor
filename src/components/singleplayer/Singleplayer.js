import React from "react";
import "./Singleplayer.css";

const Singleplayer = () => {
  return (
    <section id="single_player">
      <div className="container">
        <div className="result_field">
          <div className="score_result">
            <div>
              User Score
              <span className="user_score"></span>
            </div>

            <div>
              <span className="cpu_score"> </span>
              CPU
            </div>
          </div>
          <div className="result_images">
            <span className="user_result">
              <image src="rock.jpg" alt="" />
            </span>
            <span className="cpu_result">
              <image src="rock.jpg" alt="" />
            </span>
          </div>
          <div className="result">Let's play</div>
        </div>


        {/*********** * Image********** */}
        <div className="option_images">
          <span className="option_image">
            <img src="rock.jpg" alt="" />
            <p>Rock</p>
          </span>

          <span className="option_image">
            <img src="paper.jpg" alt="" />
            <p>Paper</p>
          </span>

          <span className="option_image">
            <img src="scissors.jpg" alt="" />
            <p>Scissors</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Singleplayer;
