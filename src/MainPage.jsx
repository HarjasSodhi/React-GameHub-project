import "./MainPage.css"
import Typing from 'react-typing-animation';
import { Redirect, Link } from "react-router-dom";
let MainPage = () => {
    return (
        <div className='box'>
            <div className="header">
                <Typing speed={125}>
                    <Typing.Delay ms={1000} />
                    GameHub
                </Typing>
            </div>
            <div className="content">
                <div className="game" onClick={() => {
                    window.location.href = 'https://harjassodhi.github.io/Match-it-Game/';
                }}>

                    <div className="img">
                        <img src="https://i.ibb.co/KxPRYqZ/Match-It-SS.png" className="tag" />
                    </div>
                    <div className="name">Match-It</div>

                </div>
                <div className="game">
                    <Link to="/HiLow">
                        <div className="img">
                            <img src="https://i.ibb.co/xjtHDWy/Screenshot-188.png" className="tag" />
                        </div>
                        <div className="name">High-Low</div>
                    </Link>
                </div>

                <div className="game">
                    <Link to="/Sudoku">
                        <div className="img">
                            <img src="https://i.ibb.co/Wc5sWs6/SudokuSS.png" className="tag" />
                        </div>
                        <div className="name">Sudoku</div>
                    </Link>
                </div>
                <div className="game">
                    <Link to="/TicTacToe">
                        <div className="img">
                            <img src="https://i.ibb.co/YjXg53K/Screenshot-189.png" className="tag" />
                        </div>
                        <div className="name">Tic Tac Toe</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default MainPage;