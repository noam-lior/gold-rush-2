let board=new GoldRush(5,5)
const renderer=new Renderer()
$(document).keydown(function (e) {

    if (e.keyCode == 37) {
        board.movePlayer(1, "left")
        renderer.render(board)
    }

    if (e.keyCode == 38) {
        board.movePlayer(1, "up")
        renderer.render(board)

    }

    if (e.keyCode == 39) {
        board.movePlayer(1, "right")
        renderer.render(board)


    }

    if (e.keyCode == 40) {
        board.movePlayer(1, "down")
        renderer.render(board)


    }

    if (e.keyCode == 65) {
        board.movePlayer(2, "left")
        renderer.render(board)


    }

    if (e.keyCode == 87) {
        board.movePlayer(2, "up")
        renderer.render(board)


    }

    if (e.keyCode == 68) {
        board.movePlayer(2, "right")
        renderer.render(board)


    }

    if (e.keyCode == 83) {
        board.movePlayer(2, "down")
        renderer.render(board)


    }
    board.print()
})

$('#start').on('click',function(){
    const rows=parseInt($('#rows').val())
    const cols=parseInt($('#cols').val())
    board=new GoldRush(rows,cols)
    renderer.render(board)
})

