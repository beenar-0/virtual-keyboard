import langs from '../langs/langs';
import render from './render';

// render(elem, [classList], [child], parent = null, ...attributes)

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
  }

  keys = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'OSLeft', 'AltLeft altKey', 'Space', 'AltRight altKey', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
  ];

  container = render('div', ['container'], null, document.body);

  keyDown() {
    console.log(event.code);
  }

  keyUp() {

  }

  build() {
    render('textarea', ['textarea'], null, this.container, ['cols', 90], ['rows', 5]);
    this.keys.forEach((item) => {
      const rowContainer = render('div', ['row'], null, this.container);
      item.forEach((el) => {
        langs[this.lang].forEach((key) => {
          const classList = ['btn'];
          switch (key.code) {
            case 'OSLeft':
              classList.push('win');
              break;
            case 'Space':
              classList.push('space');
              break;
            case 'Tab':
              classList.push('tab');
              break;
            case 'CapsLock':
              classList.push('caps');
              break;
            case 'ShiftLeft':
              classList.push('shift');
              break;
            case 'ControlLeft':
              classList.push('ctr');
              break;
            case 'ControlRight':
              classList.push('ctr');
              break;
            case 'AltLeft altKey':
              classList.push('alt');
              break;
            case 'AltRight altKey':
              classList.push('alt');
              break;
            case 'Backspace':
              classList.push('backspace');
              break;
            case 'Delete':
              classList.push('del');
              break;
            case 'Enter':
              classList.push('enter');
              break;
            case 'ShiftRight':
              classList.push('shift');
              break;
            case 'ArrowLeft':
              classList.push('arr-left', 'arr');
              break;
            case 'ArrowRight':
              classList.push('arr-right', 'arr');
              break;
            case 'ArrowDown':
              classList.push('arr-down', 'arr');
              break;
            case 'ArrowUp':
              classList.push('arr-up', 'arr');
              break;
            default:
              break;
          }
          let element;
          document.addEventListener('keydown', this.keyDown);
          document.addEventListener('keyup', this.keyUp);
          if (key.code === el) {
            element = render('div', classList, key.small, rowContainer);
          }
        });
      });
    });
  }
}
