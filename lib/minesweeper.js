"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(" ");
        }board.push(row);
    }return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(null);
        }board.push(row);
        var numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced !== numberOfBombs) {
            var randomRowIndex = Math.random(numberOfRows) * (numberOfRows - 1) + 1;
            var randomColumnIndex = Math.random(numberOfColumns) * (numberOfColumns - 1) + 1;
            board[randomRowIndex][randomColumnIndex].push("B");
            numberOfBombsPlaced++;
        }
    }return board;
};