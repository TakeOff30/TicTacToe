const boardCont = document.querySelector(".container");
const startButton = document.querySelector("#start");
const menu = document.querySelector(".menu");
const scoreBoard = document.querySelector(".scoreBoard");
const restart = document.querySelector("#restart");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");

let p1Turn = true;

restart.addEventListener("click", endGame);

let Game = (function (){

    function start(){

        menu.style.display = "none";
        scoreBoard.style.display = "flex";
        
    }

    function end(){

        menu.style.display = "flex";
        scoreBoard.style.display = "none";
        score1 = 0;
        score2 = 0;

    }

    return{
        start, end
    };
})();

let Board = (function (){

    
    function setup(){
        for (let i = 0; i < 9; i++) {

            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add(i.toString());
            boardCont.appendChild(square);
            
        }

        let squares = document.querySelectorAll(".square");
        

        squares.forEach((square) => {
            square.addEventListener("click", () =>{
                fill(square);
                //verifyWinner();
            });
        });
        

    }

    function clear(){
        
        boardCont.textContent = "";
        squares = [];
        
    }

    return{
        setup, clear
    };
})();

let Player = (player, mark) => {

    const name = "Player"+player;
    
    let score = 0;
    
    return {
        name, score, mark
    };
}

function fill(square){

    if(square.textContent == ""){
        if (p1Turn) {
            const p = document.createElement("p");
            square.appendChild(p);
            p.textContent = player1.mark;
            p.setAttribute("class", "anim");
            p1Turn = false;
        }else{
            const p = document.createElement("p");
            square.appendChild(p);
            p.textContent = player2.mark;
            p.setAttribute("class", "anim");
            p1Turn = true;
        }
    }
    
    
}

// function verifyWinner(){


//     if(){

//     }

// }

const player1 = Player("1", "X");
const player2 = Player("2", "O");

startButton.addEventListener("click", startGame);

function startGame(){

    Game.start();
    Board.setup();
   
}

function endGame(){

    Game.end();
    Board.clear();

}




