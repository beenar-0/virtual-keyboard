import render from './utils/render';
import key from './utils/key';
import langs from './langs/langs';
import Keyboard from './utils/keyboard';
import './style.css';

let currentLang = 'ru'
const keyboard = new Keyboard()
keyboard.build(false, currentLang)
keyboard.textarea.focus()
window.addEventListener('keydown', press)
window.addEventListener('keyup', unpress)


function click() {
    if (event.target.classList.contains('btn')) {
        langs[currentLang].forEach((item)=>{
            if (event.target.innerHTML === item['small'] || event.target.innerHTML === item['shift']) {
                event.code = item.code
                press()
            }

        })
    }
}

function press() {
    event.preventDefault()
    keyboard.textarea.focus()

    if (event.code === 'ControlLeft' || event.code === 'ControlRight') keyboard.isCtr = true
    if (event.code === 'AltLeft' || event.code === 'AltRight') keyboard.isAlt = true
    if (keyboard.isCtr && keyboard.isAlt) {
        if (currentLang === 'eng') currentLang = 'ru'
        else currentLang = 'eng'
        keyboard.build(false, currentLang)
    }


    if (event.code === 'Space') {
        keyboard.textarea.value += ' '
        keyboard.textValue += ' '
    }

    if (event.code === 'Tab') {
        keyboard.textarea.value += '   '
    }

    if (!keyboard[event.code]['key']['isFunc']) {
        let pos =  keyboard.textarea.selectionStart
        let str = keyboard.textarea.value.split('')
        str.splice(pos,0, keyboard[event.code].innerHTML)
        keyboard.textarea.value = str.join('')
        keyboard.textarea.selectionStart = pos + 1
        keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart
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
        keyboard.build(false, currentLang)
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {

        if (keyboard.isShift) return
        this.isShift = !this.isShift
        keyboard.build(this.isShift, currentLang)
        if (event.code) keyboard[event.code].classList.add('_active')
    }
    if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.add('_active')
    keyboard.textValue = keyboard.textarea.value
}

function unpress() {
    keyboard.isCtr = false
    keyboard.isAlt = false
    if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.remove('_active')
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.isShift = !this.isShift
        keyboard.build(this.isShift, currentLang)
        if (event.code) keyboard[event.code].classList.remove('_active')
    }
}


