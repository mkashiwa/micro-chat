input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hello")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendString("Fine, thank you!")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendString("Good! Fine")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
