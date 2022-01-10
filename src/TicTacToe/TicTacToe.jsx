import { useState } from "react";
import Block from "./Block";
// import "./TicTacToe.css";
let TicTacToe = () => {
    const [GameOver, setGameOver] = useState(false);
    const [Grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
    const [currPlayer, setcurrPlayer] = useState("X");
    const [Status, setStatus] = useState("Turn : Player X");
    let i = -1;
    return (
        <div className='TicTacToeBody'>
            <div className="StatusBar">{Status}</div>
            <div className="TicTacToecontainer">
                {
                    Grid.map(() => {
                        i++;
                        return (
                            <Block Grid={Grid} Key={i} setGrid={setGrid} currPlayer={currPlayer} setcurrPlayer={setcurrPlayer} setStatus={setStatus} GameOver={GameOver} setGameOver={setGameOver} />
                        )
                    })
                }
            </div>
            <div className="Reset">
                <button onClick={() => {
                    let blocks = document.querySelectorAll('.TicTacToeblock');
                    for(let i=0;i<blocks.length;i++)blocks[i].style.color='white'
                    setGrid(["", "", "", "", "", "", "", "", ""]);
                    setGameOver(false);
                    setcurrPlayer("X");
                    setStatus("Turn : Player X");
                }}>Reset</button>

            </div>
        </div>
    )
}
export default TicTacToe;