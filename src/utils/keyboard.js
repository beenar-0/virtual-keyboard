import langs from "../langs/langs";
import render from "./render";
import Key from "./key";

// render(elem, [classList], [child], parent = null, ...attributes)

export default class Keyboard {
    constructor() {
    }

    keys = [
        ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
        ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
    ]

    isShift = false

    isCaps = false

    textValue = ''

    isAlt = false

    isCtr = false

    build(isShift = false, lang) {
        this.lang = lang
        document.body.innerHTML = ''
        this.container = render('div', ['container'], null, document.body)
        this.textarea = render('textarea', ['textarea'], null, this.container, ['cols', 60], ['rows', 5])
        this.textarea.autofocus = true
        this.textarea.spellcheck = false
        this.textarea.value = this.textValue
        let keyContent
        if (isShift) keyContent = 'up'
        else keyContent = 'low'

        this.keys.forEach((item) => {
            let rowContainer = render('div', ['row'], null, this.container)
            item.forEach((el) => {
                langs[this.lang].forEach((key) => {
                    let element
                    let classList = ['btn']
                    switch (key['code']) {
                        case 'MetaLeft':
                            classList.push('win')
                            break
                        case 'Space':
                            classList.push('space')
                            break
                        case 'Tab':
                            classList.push('tab')
                            break
                        case 'CapsLock':
                            classList.push('caps')
                            break
                        case 'ShiftLeft':
                            classList.push('shift')
                            break
                        case 'ControlLeft':
                            classList.push('ctr')
                            break
                        case 'ControlRight':
                            classList.push('ctr')
                            break
                        case 'AltLeft':
                            classList.push('alt')
                            break
                        case 'AltRight':
                            classList.push('alt')
                            break
                        case 'Backspace':
                            classList.push('backspace')
                            break
                        case 'Delete':
                            classList.push('del')
                            break
                        case 'Enter':
                            classList.push('enter')
                            break
                        case 'ShiftRight':
                            classList.push('shift')
                            break
                        case 'ArrowLeft':
                            classList.push('arr-left', 'arr')
                            break
                        case 'ArrowRight':
                            classList.push('arr-right', 'arr')
                            break
                        case 'ArrowDown':
                            classList.push('arr-down', 'arr')
                            break
                        case 'ArrowUp':
                            classList.push('arr-up', 'arr')
                            break
                    }
                    if (key['code'] === el) {
                        element = new Key(key['small'], key['shift'], key['code'])
                        if (key['code'] === 'CapsLock' && this.isCaps) classList.push('_active')
                        if (this.isCaps && !this.isShift) {
                            if (element.isCapsable) {
                                this[element['code']] = render('div', classList, element['low'], rowContainer)
                                this[element['code']]['key'] = element
                            } else {
                                this[element['code']] = render('div', classList, element['up'], rowContainer)
                                this[element['code']]['key'] = element
                            }
                        } else {
                            this[element['code']] = render('div', classList, element[keyContent], rowContainer)
                            this[element['code']]['key'] = element
                        }
                        this[element['code']].addEventListener('click', ()=>{

                        })
                    }
                })
            })

        })
    }
}
