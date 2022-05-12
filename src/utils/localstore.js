export default class Localstore {
  static set(name, value) {
    localStorage.setItem(name, value);
  }

  static get(name) {
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    return 'eng';
  }
}
