const Matrix = require('./Matrix')
class GoldRush extends Matrix {
    constructor() {
        super(5, 5)
        const mazeChecker = new MazeChecker()
        do {
            this.fillBoard()
            mazeChecker.getMaze(this.m)
        }
        while (!mazeChecker.checkMaze())
    }

    fillBoard() {
        for (row in this.m)
            for (col in this.m[0]) {
                const rand = Math.round(Math.rand() * 3)
                if (rand == 1) // block
                    this.alter(row, col, "b")
                else if (rand == 2) // coin
                    this.alter(row, col, "c")

            }

        const rows = this.m.length;
        const cols = this.m[0].length;
        this.alter(0, 0, "1") // first player (0,0)
        this.alter(rows - 1, cols, 1, "2") // second player (2,2)
    }



}