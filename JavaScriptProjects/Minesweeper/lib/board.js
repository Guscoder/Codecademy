'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        // How many bombs will be on the board
        this._numberOfBombs = numberOfBombs;
        // size of the game board--used to determine if game is over or not after each turn
        this._numberOfEmptySpaces = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has already been flipped!');
                return;
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfEmptySpaces--;
        }
    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
            var numOfRows = this._bombBoard.length;
            var numOfColumns = this._bombBoard[0].length;
            var numOfBombs = 0;

            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = rowIndex + offset[0];
                var neighborColumnIndex = columnIndex + offset[1];

                if (neighborRowIndex >= 0 && neighborRowIndex < numOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numOfColumns) {
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numOfBombs++;
                    }
                }
            });
            return numOfBombs;
        }
    }, {
        key: 'hasNonBombEmptySpaces',
        value: function hasNonBombEmptySpaces() {
            return this._numberOfBombs !== this._numberOfEmptySpaces;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this._playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            var board = [];

            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(' ');
                }
                board.push(row);
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var board = [];

            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(null);
                }
                board.push(row);
            }
            var numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < numberOfBombs) {
                // The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

                if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }
            return board;
        }
    }]);

    return Board;
}();