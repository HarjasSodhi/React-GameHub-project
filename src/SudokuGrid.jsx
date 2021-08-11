import { useEffect, useState } from 'react';
import SudokuBlock from './SudokuBlock';
import IndexBar from './IndexBar';
import Loading from './Loading'
// import "./sudokuGrid.css";
import NumBar from './NumBar';
let SudokuGrid = () => {
    const [puzzle, setPuzzle] = useState([]);
    const [fixedPuzzle, setfixedPuzzle] = useState([]);
    const [currNum, setcurrNum] = useState(null);
    const [Score, setScore] = useState(5);
    const [Sol, setSol] = useState([]);
    let i = -1;

    let SolveSudoku = () => {
        let blocks = document.querySelectorAll(".s-Block");
        setPuzzle(Sol);
        for (let i = 0; i < fixedPuzzle.length; i++) {
            if (fixedPuzzle[i] == 0) blocks[i].style.color = "green";
        }
    }

    let GenerateSudoku = (difficulty) => {
        setPuzzle([]);
        let blocks = document.querySelectorAll(".s-Block");
        for (let i = 0; i < fixedPuzzle.length; i++) {
            if (fixedPuzzle[i] == 0) blocks[i].style.color = "white";
        }
        let obj;
        fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`).then((data) => {
            return data.json();
        }).then((json) => {
            let newArrr = [];
            obj = json;
            json = json.board;
            for (let i = 0; i < json.length; i++) {
                for (let j = 0; j < json[0].length; j++) {
                    newArrr.push(json[i][j]);
                }
            }
            setPuzzle(newArrr);
            setfixedPuzzle(newArrr);
        }).then(() => {

            const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

            const encodeParams = (params) =>
                Object.keys(params)
                    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
                    .join('&');


            const data = obj

            fetch('https://sugoku.herokuapp.com/solve', {
                method: 'POST',
                body: encodeParams(data),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .then(response => response.json())
                .then((json) => {
                    let newArrr = [];
                    json = json.solution;
                    for (let i = 0; i < json.length; i++) {
                        for (let j = 0; j < json[0].length; j++) {
                            newArrr.push(json[i][j]);
                        }
                    }
                    setSol(newArrr);
                })
        });
    }

    useEffect(() => {
        if (Score == -1) {
            alert("Congratulations!! You completed the puzzle. Starting a New Game");
            GenerateSudoku("easy");
            setScore(5);
        }
        if (Score == 0) {
            alert("You ran out of Lives. Starting a New Game");
            GenerateSudoku("easy");
            setScore(5);
        }
    }, [Score]);

    useEffect(() => {
        GenerateSudoku("easy");
    }, []);
    return (
        <div className="SudokuBody">
            <div className="Sudokucontainer">
                <div className="clock">
                    <div>Lives: {Score}</div>
                </div>
                <div className="gridContainer">
                    <NumBar setcurrNum={setcurrNum} />
                    <IndexBar selector={"vertical"} />
                    {puzzle.length == 0 ? <div className="loading"><Loading /></div> : <div className="s-Grid">
                        {
                            puzzle.map((el) => {
                                i++;
                                return (<SudokuBlock value={el} puzzle={puzzle} setPuzzle={setPuzzle} idx={i} Score={Score} setScore={setScore} currNum={currNum} fixedPuzzle={fixedPuzzle} />)
                            })
                        }
                    </div>}
                    <IndexBar selector={"horizontal"} />
                </div>
                <div className="Sudokubuttons">
                    <div>Generate New Puzzle</div>
                    <button onClick={() => {
                        GenerateSudoku("easy");
                    }}>Easy</button>
                    <button onClick={() => {
                        GenerateSudoku("medium");
                    }}>Medium</button>
                    <button onClick={() => {
                        GenerateSudoku("hard");
                    }}>Hard</button>
                    <button onClick={() => {
                        let blocks = document.querySelectorAll(".s-Block");
                        for (let i = 0; i < fixedPuzzle.length; i++) {
                            if (fixedPuzzle[i] == 0) blocks[i].style.color = "white";
                        }
                        setScore(5);
                        setPuzzle(fixedPuzzle);
                    }}>Reset</button>
                    <button onClick={() => {
                        SolveSudoku();
                    }}>Solve</button>
                </div>
            </div>
        </div>
    )
}
export default SudokuGrid;