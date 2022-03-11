input.onButtonPressed(Button.A, function () {
    if (A < length_of_strip) {
        A += 1
        strip.setPixelColor(A, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(B, neopixel.colors(NeoPixelColors.Violet))
        strip.show()
        strip.clear()
    }
})
input.onButtonPressed(Button.B, function () {
    if (B < length_of_strip) {
        B += 1
        strip.setPixelColor(B, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(A, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
// 0 means has not won
// 1 means player has won
let Violet_Won = 0
let Red_Won = 0
let B = 0
let A = 0
let strip: neopixel.Strip = null
let length_of_strip = 0
length_of_strip = 5
strip = neopixel.create(DigitalPin.P0, length_of_strip, NeoPixelMode.RGB)
strip.setBrightness(50)
A = 0
B = 0
basic.forever(function () {
    if (B >= length_of_strip) {
        if (Red_Won == 0) {
            Violet_Won += 1
            strip.showColor(neopixel.colors(NeoPixelColors.Violet))
            basic.pause(100)
            strip.clear()
            strip.show()
            basic.pause(100)
        }
    }
    if (A >= length_of_strip) {
        if (Violet_Won == 0) {
            Red_Won += 1
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.clear()
            strip.show()
            basic.pause(100)
        }
    }
})
