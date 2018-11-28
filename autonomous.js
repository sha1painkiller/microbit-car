let sonar_dist = 0
let RGB: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
RGB = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    sonar_dist = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (10 < sonar_dist) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 1023)
        RGB.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        if (5 < sonar_dist) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P1, 200)
            pins.analogWritePin(AnalogPin.P2, 500)
            RGB.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Green))
        } else {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            pins.analogWritePin(AnalogPin.P1, 200)
            pins.analogWritePin(AnalogPin.P2, 200)
            RGB.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    }
})

