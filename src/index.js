import render from "./utils/render"
import key from "./utils/key"
import langs from "./langs/langs";
import Keyboard from './utils/keyboard'
import './style.css'

// render(elem, [classList], [child], parent = null, ...attributes)

const keyboard = new Keyboard('eng')
keyboard.build()

window.addEventListener('keydown', keyboard.shift)
//
// function keyDown(){
//     console.log(event.code)
//
//     if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keyboard.shift()
//     if (keyboard[event.code]) keyboard[event.code].classList.add('_active')
// }
// window.addEventListener('keyup', ()=>{
//     if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keyboard.shift()
//     if (keyboard[event.code]) keyboard[event.code].classList.remove('_active')
// })
// console.log(keyboard)
