radio.onReceivedString(function (receivedString) {
    if (receivedString == "hi") {
        basic.showString("hi2!")
    } else if (receivedString == "forward") {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo2, kitronik_simple_servo.ServoDirection.CCW, 50)
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo3, kitronik_simple_servo.ServoDirection.CW, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "reverse") {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo2, kitronik_simple_servo.ServoDirection.CW, 50)
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo3, kitronik_simple_servo.ServoDirection.CCW, 50)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "stop") {
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo3)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (receivedString == "left") {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo2, kitronik_simple_servo.ServoDirection.CCW, 50)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo3)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (false) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo3, kitronik_simple_servo.ServoDirection.CW, 50)
        kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else {
    	
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(11)
