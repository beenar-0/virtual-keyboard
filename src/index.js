import render from './utils/render';
import key from './utils/key';
import langs from './langs/langs';
import Keyboard from './utils/keyboard';
import './style.css';

// render(elem, [classList], [child], parent = null, ...attributes)

const keyboard = new Keyboard('eng')
keyboard.build()

window.addEventListener('keydown', press)
window.addEventListener('keyup', unpress)


function press() {


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
}

function unpress() {
    if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.remove('_active')
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.isShift = !this.isShift
        keyboard.build(this.isShift)
        if (event.code) keyboard[event.code].classList.remove('_active')
    }
}

function caps() {

}
