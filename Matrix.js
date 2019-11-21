/* Write your code below */
class Matrix {
    constructor(rows, cols) {
        this.m = generateMatrix(rows, cols)
    }
    print() {
        for (let row = 0; row < this.m.length; row++) {
            let str = ""
            for (let col = 0; col < this.m[0].length; col++) {
                str += this.m[row][col]
                if (col < this.m[0].length)
                    str += "\t"
            }
            console.log(str)

        }
    }

    alter(row, col, value) {
         this.m[row][col] = value
    }

    get(row, col) { return this.m[row][col] }

    printColumn(col) {
        {
            for (let row = 0; row < this.m.length; row++) {
                console.log(this.m[row][col])
            }
        }
    }

    printRow(row) {
        for (let col = 0; col < this.m[0].length; col++) {
            console.log(this.m[row][col])
        }
    }

    findCoordinate(num) {
        for (let row = 0; row < this.m.length; row++)
            for (let col = 0; col < this.m[0].length; col++)
                if (this.m[row][col] == num) {
                    return `{x:${row}, y:${col}}`
                    
                }
    }
}

function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1

    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(".")
        }
    }
    return matrix
}


//You can paste the code from the lesson below to test your solution

// let m = new Matrix(3, 4)
// m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix