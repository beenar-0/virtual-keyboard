import render from './utils/render';
import key from './utils/key';
import langs from './langs/langs';
import Keyboard from './utils/keyboard';
import './style.css';

// render(elem, [classList], [child], parent = null, ...attributes)

const keyboard = new Keyboard('ru')
keyboard.build()
keyboard.textarea.focus()
window.addEventListener('keydown', press)
window.addEventListener('keyup', unpress)


function press() {
    keyboard.textarea.focus()
    console.log(event.code)
    event.preventDefault()

    if (event.code === 'Space') {
        keyboard.textarea.value += ' '
        keyboard.textValue += ' '
    }

    if (event.code === 'Tab') {
        keyboard.textarea.value += '   '
    }

    if (!keyboard[event.code]['key']['isFunc']) {
        keyboard.textarea.value += keyboard[event.code].innerText
    }

    if (event.code === 'Backspace') {
        let pos = keyboard.textarea.selectionStart - 1
        keyboard.textarea.value = keyboard.textarea.value.substring(0, keyboard.textarea.selectionStart - 1) + keyboard.textarea.value.substring(keyboard.textarea.selectionStart, keyboard.textarea.value.length)
        keyboard.textarea.selectionStart = pos
        keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart
    }

    if (event.code === 'Delete') {
        let pos = keyboard.textarea.selectionStart
        keyboard.textarea.value = keyboard.textarea.value.substring(0, keyboard.textarea.selectionStart) + keyboard.textarea.value.substring(keyboard.textarea.selectionStart + 1, keyboard.textarea.value.length)
        keyboard.textarea.selectionStart = pos
        keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart
    }

    if (event.code === 'ArrowRight') {
        if (keyboard.textarea.selectionStart !== keyboard.textarea.value.length)
        keyboard.textarea.selectionStart += 1
        keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart
    }

    if (event.code === 'ArrowLeft') {
        if (keyboard.textarea.selectionStart !== 0)
            keyboard.textarea.selectionStart -= 1
        keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart
    }

    if (event.code === 'CapsLock') {
        keyboard.isCaps = !keyboard.isCaps
        keyboard.build()
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {

        if (this.isShift) return
        this.isShift = !this.isShift
        keyboard.build(this.isShift)
        if (event.code) keyboard[event.code].classList.add('_active')
    }
    if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.add('_active')
    keyboard.textValue = keyboard.textarea.value
}

function unpress() {
    if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.remove('_active')
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.isShift = !this.isShift
        keyboard.build(this.isShift)
        if (event.code) keyboard[event.code].classList.remove('_active')
    }
}


