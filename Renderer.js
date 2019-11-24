class Renderer {
    render(game){
        $('#board-container').empty()
        this.setColumns(game.m)
        this.renderBoard(game.m)
        this.renderPoints(game)
    }
    renderBoard(board) {
        
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === "b")
                    $('#board-container').append(`<div class="cell block"></div>`)
                else if (board[i][j] === "c")
                    $('#board-container').append(`<div class="cell"><div class="coin"></div></div>`)
                else if (board[i][j] == 1)
                    $('#board-container').append(`<div class="cell"><div class="player player1"></div></div>`)
                else if (board[i][j] == 2)
                    $('#board-container').append(`<div class="cell"><div class="player player2"></div></div>`)
                else
                    $('#board-container').append(`<div class="cell"></div>`)
            }

        }
    }
    setColumns(board) {
        const cols = board[0].length
        let root = document.documentElement;
        root.style.setProperty('--colNum', cols);
    }
    renderPoints(game) {
        $('#p1-score').text(game.player1.score)
        $('#p2-score').text(game.player2.score)
    }

}