basic.showString("ILOVEYOU")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 C B E G A G E ", 120), music.PlaybackMode.UntilDone)
})
