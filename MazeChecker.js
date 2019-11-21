class MazeChecker {
    constructor() {
        this.maze = []
    }

    getMaze(maze) {
        for (let i = 0; i < maze.length; i++)
            for (let j = 0; j < maze.length; j++)
                if (this.maze[i][j] === "b")
                    this.maze = 1;
                else
                    this.maze = 0;
    }
    checkMaze() {
       return checkMaze(this.maze,0,0)
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
    const right = searchPath(maze, row, col + 1)
    //move up
    const up = searchPath(maze, row - 1, col)
    //move left
    const left = searchPath(maze, row, col - 1)
    //move down
    const down = searchPath(maze, row + 1, col)
    // check whether a path was found in any of the cases above
    if (right || up || left || down) {
        console.log(maze)
        return true
    }

    // unable to move forward- return false
    return false
}
const simpleMaze = [
    [0, 1],
    [0, 1],
    [0, 0]
];

