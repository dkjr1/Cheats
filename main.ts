function Slomo_on_off () {
    Is_slo_mo_active = !(Is_slo_mo_active)
}
function Slo_mo_step (Screenbeforeslomo: Image) {
    game.pushScene()
scene.setBackgroundImage(Screenbeforeslomo)
    pause(0)
    game.popScene()
}
let Is_slo_mo_active = false
scene.systemMenu.addEntry(() => "SLO-MO", Slomo_on_off, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 4 4 4 4 4 . . . . . . . .
    . . 4 5 5 5 5 5 4 . . . . . . .
    . . 4 5 4 4 4 5 4 . . . . . . .
    . . 4 5 4 5 4 5 4 . . . . . . .
    . . 4 5 5 5 4 5 4 . . . . . . .
    . . 4 4 4 4 4 5 4 . . 7 . . . 7
    . . . 5 5 5 5 5 . . . . 7 . 7 .
    . . . 7 7 7 7 7 7 7 7 7 7 7 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`);
forever(function () {
    if (Is_slo_mo_active) {
        Slo_mo_step(image.screenImage())
    }
    pause(0)
})
