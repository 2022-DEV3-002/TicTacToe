import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

const TicTacToe = () => {

    const gridArray = useRef(Array.from(Array(9).fill(0)));
    const winningLines = [
        gridArray.current.filter((value, index) => index === 0 || index === 1 || index === 2),
        gridArray.current.filter((value, index) => index === 3 || index === 4 || index === 5),
        gridArray.current.filter((value, index) => index === 6 || index === 7 || index === 8),
        gridArray.current.filter((value, index) => index === 0 || index === 3 || index === 6),
        gridArray.current.filter((value, index) => index === 1 || index === 4 || index === 7),
        gridArray.current.filter((value, index) => index === 2 || index === 5 || index === 8),
        gridArray.current.filter((value, index) => index === 0 || index === 4 || index === 8),
        gridArray.current.filter((value, index) => index === 2 || index === 4 || index === 6)
    ];

    const [isFirstPlayerTurn, setFirstPlayerTurn] = useState(true);

    useEffect(() => {
        let valueToCheck = !isFirstPlayerTurn ? 1 : 2;
        let hasWinningCombo = checkLines(winningLines, valueToCheck);
        //let hasMovesLeft = hasMovesLeft(gridArray.current);
        if(hasWinningCombo || !hasMovesLeft(gridArray.current)) {
            let message;
            if(hasWinningCombo) {
                message = "Game Over, player " + (!isFirstPlayerTurn ? 1 : 2) + " won!\nPress OK to restart";
            } else {
                message = "Game Over, game ended in a draw\nPress OK to restart";
            }
            window.alert(message);
            gridArray.current = Array.from(Array(9).fill(0));
            setFirstPlayerTurn(true);
        }
    });

    const onTilePress = (index) => {
        gridArray.current[index] = isFirstPlayerTurn ? 1 : 2;
        setFirstPlayerTurn(!isFirstPlayerTurn);
    }

    return(
        <Grid
        gridArray={gridArray.current}
        onTilePress={onTilePress}
        />
    );
}

const checkLine = (line, valueToCheck) => {
    return line.length === line.filter((value) => value === valueToCheck).length;
}

const checkLines = (lines, valueToCheck) => {
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if(checkLine(line, valueToCheck)) {
            return true;
        }
    }
    return false;
}

const hasMovesLeft = (gridArray) => {
    return gridArray.filter((value) => value === 0).length !== 0;
}
export default TicTacToe;
export {checkLine, checkLines, hasMovesLeft};