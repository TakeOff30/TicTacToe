const boardCont = document.querySelector(".container");
const startButton = document.querySelector("#start");
const menu = document.querySelector(".menu");
const scoreBoard = document.querySelector(".scoreBoard");
const restart = document.querySelector("#restart");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");

let p1Turn = true;
let moveCount = 0;

restart.addEventListener("click", endGame);

let Game = (function (){

    function start(){

        menu.style.display = "none";
        scoreBoard.style.display = "flex";
        
    }

    function updateScore(){
        score1.textContent = player1.score;
        score2.textContent = player2.score;
    }

    function end(){

        menu.style.display = "flex";
        scoreBoard.style.display = "none";
        score1 = 0;
        score2 = 0;

    }

    return{
        start, end, updateScore
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
                moveCount++;
                if(moveCount >= 5){
                    if (moveCount < 9) {
                        verifyWinner(); 
                    }else{
                        moveCount = 0;
                        setTimeout(() => {
                            Board.clear();
                            Board.setup();
                        },1000);
                    }
                    
                }
               
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
            p.classList.add("anim");
            p1Turn = false;
        }else{
            const p = document.createElement("p");
            square.appendChild(p);
            p.textContent = player2.mark;
            p.classList.add("anim");
            p1Turn = true;
        }
    }
    
    
}

function verifyWinner(){

    let squares = document.querySelectorAll(".square");

    if(
        (squares[0].textContent == "X" && squares[1].textContent == "X" && squares[2].textContent == "X") ||
        (squares[3].textContent == "X" && squares[4].textContent == "X" && squares[5].textContent == "X") ||
        (squares[6].textContent == "X" && squares[7].textContent == "X" && squares[8].textContent == "X") ||
        (squares[0].textContent == "X" && squares[3].textContent == "X" && squares[6].textContent == "X") ||
        (squares[1].textContent == "X" && squares[4].textContent == "X" && squares[7].textContent == "X") ||
        (squares[2].textContent == "X" && squares[5].textContent == "X" && squares[8].textContent == "X") ||
        (squares[0].textContent == "X" && squares[4].textContent == "X" && squares[8].textContent == "X") ||
        (squares[2].textContent == "X" && squares[4].textContent == "X" && squares[6].textContent == "X")
    ){
        player1.score++;
        Game.updateScore();
        moveCount = 0;
        setTimeout(() => {
            Board.clear();
            Board.setup();
        },1000);
        
    }else if(
        (squares[0].textContent == "O" && squares[1].textContent == "O" && squares[2].textContent == "O") ||
        (squares[3].textContent == "O" && squares[4].textContent == "O" && squares[5].textContent == "O") ||
        (squares[6].textContent == "O" && squares[7].textContent == "O" && squares[8].textContent == "O") ||
        (squares[0].textContent == "O" && squares[3].textContent == "O" && squares[6].textContent == "O") ||
        (squares[1].textContent == "O" && squares[4].textContent == "O" && squares[7].textContent == "O") ||
        (squares[2].textContent == "O" && squares[5].textContent == "O" && squares[8].textContent == "O") ||
        (squares[0].textContent == "O" && squares[4].textContent == "O" && squares[8].textContent == "O") ||
        (squares[2].textContent == "O" && squares[4].textContent == "O" && squares[6].textContent == "O")
    ){
        player2.score++;
        Game.updateScore();
        moveCount = 0;
        setTimeout(() => {
            Board.clear();
            Board.setup();
        },1000);
        
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

    Game.end();
    Board.clear();

}




