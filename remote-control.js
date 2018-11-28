radio.onDataPacketReceived(({ receivedNumber: cmd }) => {
    if (cmd == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (cmd == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (cmd == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 25)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (cmd == 4) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 25)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 25)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        motobit.enable(MotorPower.Off)
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, () => {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    basic.pause(1000)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
    basic.pause(1000)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    basic.pause(1000)
    motobit.enable(MotorPower.Off)
})
input.onButtonPressed(Button.B, () => {
    motobit.enable(MotorPower.Off)
})
basic.showString("XCAR")
radio.setGroup(4)

