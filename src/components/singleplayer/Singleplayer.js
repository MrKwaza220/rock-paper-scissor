import React from "react";
import "./Singleplayer.css";

const Singleplayer = () => {
  const gameContainer = document.querySelector(".container"),
  userScore = document.querySelector(".user_score"),
  cpuScore = document.querySelector(".cpu_score"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");



// Create new Image objects to preload the images
const rockImage = new Image();
rockImage.src = "rock.png";

const paperImage = new Image();
paperImage.src = "paper.png";

const scissorsImage = new Image();
scissorsImage.src = "scissor.png";



// A function to handle the game logic
function playGame(index) {
  // Add "active" class to the clicked option image
  optionImages.forEach((image2, index2) => {
    image2.classList.toggle("active", index === index2);
  });

  userResult.src = rockImage.src; // Set default image while waiting
  cpuResult.src = rockImage.src; // Set default image while waiting
  result.textContent = "Wait...";
  
  
  gameContainer.classList.add("start");



  // Set a timeout to delay the result calculation
  setTimeout(() => {
    gameContainer.classList.remove("start");

    const userImageSrc = optionImages[index].querySelector("img").src;
    userResult.src = userImageSrc;
    

    const randomNumber = Math.floor(Math.random() * 3);
    const cpuImages = [rockImage.src, paperImage.src, scissorsImage.src];
    cpuResult.src = cpuImages[randomNumber];
  

    const cpuValue = ["R", "P", "S"][randomNumber];
    const userValue = ["R", "P", "S"][index];

    const outcomes = {
      RR: "Draw",
      RP: "Cpu",
      RS: "User",
      PP: "Draw",
      PR: "User",
      PS: "Cpu",
      SS: "Draw",
      SR: "Cpu",
      SP: "User",
    };

    const outcomeValue = outcomes[userValue + cpuValue];
    result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`;
 /*   
 if(outcomeValue) increamentScore(userScore)
 if(outcomeValue) increamentScore(cpuScore)

    */
 
  }, 2500);
}
//Increament score
function increamentScore(scoreResult){
   scoreResult.innerText = parseInt(scoreResult.innerText) + 1
}
// Attach click event listeners to option images
optionImages.forEach((image, index) => {
  image.addEventListener("click", () => playGame(index));
});

/* Initialize the game with the default option (rock)
playGame(0);*/


  return (
    <section id="single_player">
      <div className="container">
        <div className="result_field">
          <div className="score_result">
            <div>
              User Score: 
              <span className="user_score"></span>
            </div>

            <div>
              <span className="cpu_score"> </span>
              CPU: 
            </div>
          </div>
          <div className="result_images">
            <span className="user_result">
              <image src="rock.png" alt="Rock" />
            </span>
            <span className="cpu_result">
              <image src="rock.png" alt="Rock" />
            </span>
          </div>
          <div className="result">Let's play</div>
        </div>


        {/*********** * Image********** */}
        <div className="option_images">
          <span className="option_image">
            <img src="rock.png" alt="rock" />
            <p>Rock</p>
          </span>

          <span className="option_image">
            <img src="paper.png" alt="Paper" />
            <p>Paper</p>
          </span>

          <span className="option_image">
            <img src="scissor.png" alt="Scissor" />
            <p>Scissors</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Singleplayer;
