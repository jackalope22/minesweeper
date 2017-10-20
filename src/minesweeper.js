
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = []; 
    for (let i = 0; i < numberOfRows; i++){
        let row = [];
        for (let j = 0; j < numberOfColumns; j++){
            row.push(" ");
        } board.push(row);
    } return board
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (let i = 0; i < numberOfRows; i++){
        let row = [];
        for (let j = 0; j < numberOfColumns; j++){
            row.push(null);
        } board.push(row);
        let numberOfBombsPlaced = 0
        while (numberOfBombsPlaced !== numberOfBombs) {
            let randomRowIndex = Math.random(numberOfRows) * (numberOfRows - 1) + 1;
            let randomColumnIndex = Math.random(numberOfColumns) * (numberOfColumns - 1) + 1;
            board[randomRowIndex][randomColumnIndex].push("B")
            numberOfBombsPlaced++;
        }



    }return board
}