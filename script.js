const boardCont = document.querySelector(".container");
const startButton = document.querySelector("#start");
const menu = document.querySelector(".menu");
const scoreBoard = document.querySelector(".scoreBoard");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let p1Turn = true;

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

        const squares = document.querySelectorAll(".square");

        squares.forEach((square) => {
            square.addEventListener("click", fill.bind(square), false);
        });

    }

    function clear(){
        
        
        for (let i = 0; i < 9; i++) {

            boardCont.removeChild(squares[i]);
            
        }
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

    if (p1Turn) {
        square.textContent = player1.mark; 
        p1Turn = false;
    }else{
        square.textContent = player2.mark; 
        p1Turn = true;
    }
    
}



const player1 = Player("1", "X");
const player2 = Player("2", "O");

startButton.addEventListener("click", startGame);

function startGame(){

    Game.start();
    Board.setup();
    

}

function endGame(){

    match.end();
    board.clear();

}




