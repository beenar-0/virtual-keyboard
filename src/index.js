/* eslint-disable no-unused-vars */
import render from './utils/render';
import key from './utils/key';
import langs from './langs/langs';
import Keyboard from './utils/keyboard';
import Localstore from './utils/localstore';
import './style.css';
/* eslint-enable no-unused-vars */
const hint = document.createElement('div');
hint.innerHTML = 'СTR+ALT смена языка. Клавиатура разработана под windows';

let currentLang = Localstore.get('BeenarLang');
const keyboard = new Keyboard();
keyboard.build(currentLang);
keyboard.textarea.focus();
keyboard.container.append(hint);
function press() {
  event.preventDefault();
  keyboard.textarea.focus();

  if (event.code === 'ControlLeft' || event.code === 'ControlRight') keyboard.isCtr = true;
  if (event.code === 'AltLeft' || event.code === 'AltRight') keyboard.isAlt = true;
  if (keyboard.isCtr && keyboard.isAlt) {
    if (currentLang === 'eng') currentLang = 'ru';
    else currentLang = 'eng';
    keyboard.build(currentLang);
    Localstore.set('BeenarLang', currentLang);
  }

  if (event.code === 'Space') {
    keyboard.textarea.value += ' ';
    keyboard.textValue += ' ';
  }

  if (event.code === 'Tab') {
    keyboard.textarea.value += '   ';
  }

  if (!keyboard[event.code].key.isFunc) {
    const pos = keyboard.textarea.selectionStart;
    const str = keyboard.textarea.value.split('');
    str.splice(pos, 0, keyboard[event.code].innerHTML);
    keyboard.textarea.value = str.join('');
    keyboard.textarea.selectionStart = pos + 1;
    keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart;
  }

  if (event.code === 'Backspace') {
    const { length } = keyboard.textarea;
    let start = keyboard.textarea.selectionStart;
    const pos = keyboard.textarea.selectionStart - 1;
    let x = keyboard.textarea.value.substring(0, start - 1);
    x += keyboard.textarea.value.substring(start, length);
    keyboard.textarea.value = x;
    start = pos;
    keyboard.textarea.selectionEnd = start;
  }

  if (event.code === 'Delete') {
    const { length } = keyboard.textarea;
    let start = keyboard.textarea.selectionStart;
    const pos = keyboard.textarea.selectionStart;
    let x = keyboard.textarea.value.substring(0, start);
    x += keyboard.textarea.value.substring(start + 1, length);
    keyboard.textarea.value = x;
    start = pos;
    keyboard.textarea.selectionEnd = start;
  }

  if (event.code === 'ArrowRight') {
    if (keyboard.textarea.selectionStart !== keyboard.textarea.value.length) {
      keyboard.textarea.selectionStart += 1;
    }
    keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart;
  }

  if (event.code === 'ArrowLeft') {
    if (keyboard.textarea.selectionStart !== 0) {
      keyboard.textarea.selectionStart -= 1;
    }
    keyboard.textarea.selectionEnd = keyboard.textarea.selectionStart;
  }

  if (event.code === 'CapsLock') {
    keyboard.isCaps = !keyboard.isCaps;
    keyboard.build(currentLang);
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keyboard.isShift) return;
    this.isShift = !this.isShift;
    keyboard.build(currentLang, this.isShift);
    if (event.code) keyboard[event.code].classList.add('_active');
  }
  if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.add('_active');
  keyboard.textValue = keyboard.textarea.value;
}

function unpress() {
  keyboard.isCtr = false;
  keyboard.isAlt = false;
  if (keyboard[event.code] && event.code !== 'CapsLock') keyboard[event.code].classList.remove('_active');
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    this.isShift = !this.isShift;
    keyboard.build(currentLang, this.isShift);
    if (event.code) keyboard[event.code].classList.remove('_active');
  }
}

window.addEventListener('keydown', press);
window.addEventListener('keyup', unpress);
