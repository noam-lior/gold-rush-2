// // const Matrix = require('./Matrix')
// const MazeChecker=require('./MazeChecker')

class GoldRush extends Matrix {
    constructor(rows, cols) {
        super(rows, cols)
        this.player1 = { x: 0, y: 0, score: 0 }
        this.player2 = { x: rows - 1, y: cols - 1, score: 0 }
        this.availableCoins=0;
        const mazeChecker = new MazeChecker(rows, cols)
        do {
            this.fillBoard()
            mazeChecker.getMaze(this.m)
        }
        while (!mazeChecker.checkMaze(0,0))
    }

    fillBoard() {
        for (let row in this.m)
            for (let col in this.m[0]) {
                const rand = Math.round(Math.random() * 3)
                if (rand == 1) // block
                    this.alter(row, col, "b")
                else if (rand == 2) // coin
                    this.alter(row, col, "c")
                const rows = this.m.length;
                const cols = this.m[0].length;
                this.alter(0, 0, "1") // first player (0,0)
                this.alter(rows - 1, cols - 1, "2") // second player (4,4) 
            }
    }

    movePlayer(player, direction) {
        this.alter(this["player" + player].x, this["player" + player].y, '.')
        if (direction === "down") {
            if (this["player" + player].x < this.m.length - 1 && !this.isWall(this["player" + player].x + 1, this["player" + player].y))
                this["player" + player].x++
        }
        else if (direction === "up") {
            if (this["player" + player].x > 0 && !this.isWall(this["player" + player].x - 1, this["player" + player].y))
                this["player" + player].x--
        }
        else if (direction === "left") {
            if (this["player" + player].y > 0 && !this.isWall(this["player" + player].x, this["player" + player].y - 1))
                this["player" + player].y--
        }
        else if (direction === "right") {
            if (this["player" + player].y < this.m[0].length - 1 && !this.isWall(this["player" + player].x, this["player" + player].y + 1))
                this["player" + player].y++
        }
        else console.log("error")

        if (this.m[this["player" + player].x][this["player" + player].y] === "c")
            this["player" + player].score++;

        if (player == 1)
            this.alter(this["player" + player].x, this["player" + player].y, '1')
        else
            this.alter(this["player" + player].x, this["player" + player].y, '2')
    }
    isWall(row, col) {
        if (this.m[row][col] === "b")
            return true
        return false
    }

    countAvailableCoins() {
        const mazeChecker = new MazeChecker(rows, cols)
        mazeChecker.getMaze(this.m)
        for (let i = 0; i < this.m.length)
            for (let j = 0; j < this.m[0].length)
                if (this.m[i][j] === "c" && mazeChecker.checkMaze(i,j)) {
                    this.availableCoins++
                }
    }

}




