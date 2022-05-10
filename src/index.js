import render from "./utils/render"
import key from "./utils/key"
import langs from "./langs/langs";
import Keyboard from './utils/keyboard'
import './style.css'

// render(elem, [classList], [child], parent = null, ...attributes)

const keyboard = new Keyboard('eng')
keyboard.build()
