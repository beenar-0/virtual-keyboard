export default class Key {
  constructor(low, up, code) {
    this.code = code;
    this.low = low;
    if (up === 'null') this.up = low;
    else this.up = up;
    this.isCapsable = !code.match(/^Key[A-Z\d]$/);
    this.isFunc = !code.match(/^Key[A-Z]|BracketLeft|Backquote|Slash|Period|Comma|Quote|Semicolon|Backslash|BracketRight|^Digit\d|Equal|Minus$/);
    if (this.low.match(/^[а-я]$/)) this.isCapsable = false;
  }
}
