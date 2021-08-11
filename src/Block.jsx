let Block = (props) => {

    function checkWinner(currPlayer, temp) {
        let blocks = document.querySelectorAll('.TicTacToeblock');
        let blocks2D = [[blocks[0], blocks[1], blocks[2]], [blocks[3], blocks[4], blocks[5]], [blocks[6], blocks[7], blocks[8]]];
        let checkArr = [[], [], []];
        for (let i = 0; i < 9; i++) {
            let r = Math.floor(i / 3);
            checkArr[r].push(temp[i]);
        }

        if (props.Key % 2 === 0) {
            if ((checkArr[0][0] === currPlayer && checkArr[1][1] === currPlayer && checkArr[2][2] === currPlayer) || (checkArr[0][2] === currPlayer && checkArr[1][1] === currPlayer && checkArr[2][0] === currPlayer)) {
                if ((checkArr[0][0] === currPlayer && checkArr[1][1] === currPlayer && checkArr[2][2] === currPlayer)) {
                    blocks[0].style.color = 'green'
                    blocks[4].style.color = 'green'
                    blocks[8].style.color = 'green'
                }
                else {
                    blocks[2].style.color = 'green'
                    blocks[4].style.color = 'green'
                    blocks[6].style.color = 'green'
                }
                props.setStatus(`Player: ${currPlayer} wins!!`)
                props.setGameOver(true);
                return -1
            }
        }
        let r = Math.floor(props.Key / 3);
        let c = props.Key % 3

        let rowWin = true;
        let colWin = true;
        for (let i = 0; i < 3; i++) {
            if (checkArr[r][i] !== currPlayer) rowWin = false;
            if (checkArr[i][c] !== currPlayer) colWin = false;
        }
        if (rowWin || colWin) {
            if (rowWin) {
                for (let i = 0; i < blocks2D.length; i++) {
                    blocks2D[r][i].style.color = "green";
                }
            }
            else {
                for (let i = 0; i < blocks2D.length; i++) {
                    blocks2D[i][c].style.color = "green";
                }
            }
            props.setStatus(`Player: ${currPlayer} wins!!`)
            props.setGameOver(true);
            return -1
        }


        let allFilled = true;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === "") allFilled = false;
        }

        if (allFilled) {
            props.setStatus("Game Draw");
            return -1;
        }
    }

    return (
        <div className="TicTacToeblock" onClick={
            () => {
                if (!props.GameOver) {
                    if (props.Grid[props.Key] == '') {

                        let temp = props.Grid.map((el) => {
                            return el;
                        })
                        if (temp[props.Key] === '') temp[props.Key] = props.currPlayer;

                        props.setGrid(temp);
                        let check = checkWinner(props.currPlayer, temp);

                        if (check !== -1) {
                            if (props.currPlayer === "X") {
                                props.setcurrPlayer("O");
                                props.setStatus("Turn: Player O")
                            }
                            else {
                                props.setcurrPlayer("X");
                                props.setStatus("Turn: Player X")
                            }
                        }

                    }
                }
                else {
                    alert("Game Over. Reset Game To Start Again");
                }
            }
        }>{props.Grid[props.Key]}</div>
    )
}
export default Block;