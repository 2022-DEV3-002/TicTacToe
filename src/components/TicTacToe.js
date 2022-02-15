import { useRef } from "react";
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

    return(
        <Grid/>
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