def on_button_pressed_a():
    global A
    if A <= Round * Strip_Length - 2:
        A += 1
        Strip_A.set_pixel_color(A % Strip_Length, neopixel.colors(NeoPixelColors.RED))
        Strip_A.set_pixel_color(B % Strip_Length, neopixel.colors(NeoPixelColors.GREEN))
        Strip_A.show()
        Strip_A.clear()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global B
    if B <= Round * Strip_Length - 2:
        B += 1
        Strip_A.set_pixel_color(A % Strip_Length, neopixel.colors(NeoPixelColors.RED))
        Strip_A.set_pixel_color(B % Strip_Length, neopixel.colors(NeoPixelColors.GREEN))
        Strip_A.show()
        Strip_A.clear()
input.on_button_pressed(Button.B, on_button_pressed_b)

# Maybe I could add that if A=B set that possition to the combined color!!!!!!!!

def on_logo_pressed():
    global Round, Green_Won, Red_Won, A, B
    Round = 2
    Green_Won = 0
    Red_Won = 0
    A = 0
    B = 0
    Strip_A.show()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Strip_A: neopixel.Strip = None
Strip_Length = 0
B = 0
A = 0
Red_Won = 0
Green_Won = 0
Round = 0
Round = 2
Green_Won = 0
Red_Won = 0
A = 0
B = 0
Strip_Length = 29
Strip_A = neopixel.create(DigitalPin.P0, Strip_Length, NeoPixelMode.RGB)
Strip_A.set_brightness(50)

def on_forever():
    global Red_Won, Green_Won
    if A > Round * Strip_Length - 2:
        if Green_Won == 0:
            Red_Won = 1
            Strip_A.show_color(neopixel.colors(NeoPixelColors.RED))
            basic.pause(100)
            Strip_A.clear()
            Strip_A.show()
            basic.pause(100)
    if B > Round * Strip_Length - 2:
        if Red_Won == 0:
            Green_Won = 1
            Strip_A.show_color(neopixel.colors(NeoPixelColors.GREEN))
            basic.pause(100)
            Strip_A.clear()
            Strip_A.show()
            basic.pause(100)
basic.forever(on_forever)
