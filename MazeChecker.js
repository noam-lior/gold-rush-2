// const Matrix = require('./Matrix')
class MazeChecker extends Matrix {
    constructor(rows,cols){
        super(rows,cols)
    }
    getMaze(maze) {
        for (let i = 0; i < maze.length; i++)
            for (let j = 0; j < maze.length; j++)
                if (maze[i][j] === "b")
                    this.m[i][j] = 1;
                else
                    this.m[i][j] = 0;
    }
    checkMaze(i,j) {
        return checkMaze(this.m, i,j)
    }
}

const checkMaze = (maze, row, col) => {
    // stopping conditions
    // out of maze's bounds
    if (col < 0 || row < 0 || col >= maze[0].length || row >= maze.length)
        return false;
    // cell is in bounds
    // current cell is a wall or was already visited
    if (maze[row][col] != 0)
        return false;
    // cell is free
    // arrived to end of array - bottom right of maze
    if (row == maze.length - 1 && col == maze[0].length - 1)
        return true
    // current cell is inside the maze and is free 
    // mark current block as visited 
    maze[row][col] = 2;
    //move right
    const right = checkMaze(maze, row, col + 1)
    //move up
    const up = checkMaze(maze, row - 1, col)
    //move left
    const left = checkMaze(maze, row, col - 1)
    //move down
    const down = checkMaze(maze, row + 1, col)
    // check whether a path was found in any of the cases above
    if (right || up || left || down) {
        return true
    }

    // unable to move forward- return false
    return false
}

// module.exports = MazeChecker;
