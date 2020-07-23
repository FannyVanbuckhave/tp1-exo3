let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    while (y <= 7) {
        led.plot(x, y)
        basic.pause(200)
        y += 1
        led.plotBrightness(x, y - 1, 193)
        led.plotBrightness(x, y - 2, 121)
        led.unplot(x, y - 3)
    }
})
