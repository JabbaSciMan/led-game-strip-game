input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (A <= Round * Strip_Length - 2) {
        A += 1
        Strip_A.setPixelColor(A % Strip_Length, neopixel.colors(NeoPixelColors.Red))
        Strip_A.setPixelColor(B % Strip_Length, neopixel.colors(NeoPixelColors.Green))
        Strip_A.show()
        Strip_A.clear()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (B <= Round * Strip_Length - 2) {
        B += 1
        Strip_A.setPixelColor(A % Strip_Length, neopixel.colors(NeoPixelColors.Red))
        Strip_A.setPixelColor(B % Strip_Length, neopixel.colors(NeoPixelColors.Green))
        Strip_A.show()
        Strip_A.clear()
    }
    
})
//  Maybe I could add that if A=B set that possition to the combined color!!!!!!!!
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    Round = 2
    Green_Won = 0
    Red_Won = 0
    A = 0
    B = 0
    Strip_A.show()
})
let Strip_A : neopixel.Strip = null
let Strip_Length = 0
let B = 0
let A = 0
let Red_Won = 0
let Green_Won = 0
let Round = 0
Round = 2
Green_Won = 0
Red_Won = 0
A = 0
B = 0
Strip_Length = 29
Strip_A = neopixel.create(DigitalPin.P0, Strip_Length, NeoPixelMode.RGB)
Strip_A.setBrightness(50)
basic.forever(function on_forever() {
    
    if (A > Round * Strip_Length - 2) {
        if (Green_Won == 0) {
            Red_Won = 1
            Strip_A.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            Strip_A.clear()
            Strip_A.show()
            basic.pause(100)
        }
        
    }
    
    if (B > Round * Strip_Length - 2) {
        if (Red_Won == 0) {
            Green_Won = 1
            Strip_A.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(100)
            Strip_A.clear()
            Strip_A.show()
            basic.pause(100)
        }
        
    }
    
})
