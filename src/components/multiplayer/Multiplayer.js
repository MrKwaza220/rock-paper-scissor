import React from "react";
import "./Multiplayer.css";

const Multiplplayer =() =>{

    return(
       <section id="multiplayer">
        <h1>multiplayer Game</h1>
        <div className="container">
            <div className="multi_container">
            <div class="result_field">
      <div class="score_result">

        <div>
          User Score 
          <span class="user_score" ></span>
        </div>

        <div>
             <span class="cpu_score" > </span>
             CPU
        </div>
       </div>
        <div class="result_images">
            <span class="user_result">
              <image src="Images/rock.jpg" alt=""/>
            </span>
            <span class="cpu_result">
                <image src="Images/rock.jpg" alt=""/>
              </span>
        </div>
       <div class="result">
          Let's play
       </div>
     </div>
     <div class="option_images">
        <span class="option_image">
            <img src="Images/rock.jpg" alt=""/>
            <p>Rock</p>
        </span>

        <span class="option_image">
            <img src="Images/paper.jpg" alt=""/>
            <p>Paper</p>
        </span>
      
        <span class="option_image">
            <img src="Images\scissors.jpg" alt=""/>
            <p>Scissors</p>
        </span>
     </div>
            </div>
        </div>


       </section> 
    )
}

export default Multiplplayer;