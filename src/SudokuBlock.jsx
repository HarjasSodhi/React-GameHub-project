let SudokuBlock = (props) => {
    let isValid = (num) => {
        let grid = [];
        let index = 0;
        for (let i = 0; i < 9; i++) {
            let tempArr = [];
            for (let j = 0; j < 9; j++) {
                tempArr.push(props.puzzle[index]);
                index++;
            }
            grid.push(tempArr);
        }
        let RecAns = isValidHelper(grid, num, props.idx);
        return RecAns;
    }

    let isValidHelper = (grid, currNum, idx) => {
        let blocks = document.querySelectorAll(".s-Block");
        let blocksArr = [];
        let index = 0;
        for (let i = 0; i < 9; i++) {
            let tempArr = [];
            for (let j = 0; j < 9; j++) {
                tempArr.push(blocks[index]);
                index++;
            }
            blocksArr.push(tempArr);
        }

        let r = Math.floor(idx / 9);
        let c = idx % 9
        let isRow = true;
        for (let i = 0; i < 9; i++) {
            if (grid[r][i] == currNum) {
                isRow = false;
                break;
            }
        }
        if (!isRow) {
            for (let i = 0; i < 9; i++) {
                blocksArr[r][i].style.color = 'red';
            }
            setTimeout(() => {
                for (let i = 0; i < 9; i++) {
                    blocksArr[r][i].style.color = 'white';
                }
            }, 1000);
            return false;
        }
        let isCol = true;
        for (let i = 0; i < 9; i++) {
            if (grid[i][c] == currNum) {
                isCol = false;
                break;
            }
        }
        if (!isCol) {
            for (let i = 0; i < 9; i++) {
                blocksArr[i][c].style.color = 'red';
            }
            setTimeout(() => {
                for (let i = 0; i < 9; i++) {
                    blocksArr[i][c].style.color = 'white';
                }
            }, 1000);
            return false;
        }
        let isMat = true;
        let x = Math.floor(r / 3) * 3;
        let y = Math.floor(c / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i + x][j + y] == currNum) {
                    isMat = false;
                    break;
                }
            }
        }
        if (!isMat) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    blocksArr[i + x][j + y].style.color = "red";
                }
            }
            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        blocksArr[i + x][j + y].style.color = "white";
                    }
                }
            }, 1000);
            return false;
        }
        let AllFilled = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] == 0) {
                    AllFilled = false;
                    break;
                }
            }
        }
        if (AllFilled) {
            props.setScore(-1);
        }

        return true;
    }

    return (
        <div className="s-Block" onClick={(e) => {
            if (e.currentTarget.innerText === "") {
                if (props.currNum) {
                    let recAns = isValid(props.currNum);
                    if (recAns) {
                        let temp = props.puzzle.map((el) => {
                            return el;
                        })
                        temp[props.idx] = props.currNum;
                        props.setPuzzle(temp);
                    }
                    else {
                        props.setScore(props.Score - 1);
                    }
                }
                else {
                    alert("Please Select A Number");
                }
            }
            else {
                if (props.fixedPuzzle[props.idx] == 0) {
                    let temp = props.puzzle.map((el) => {
                        return el;
                    })
                    temp[props.idx] = 0;
                    props.setPuzzle(temp);
                }
            }
        }}>{props.value === 0 ? "" : props.value}</div>
    )
}

export default SudokuBlock;