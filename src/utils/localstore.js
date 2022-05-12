export default class Localstore {
    constructor() {
    }

    set(name, value) {
        localStorage.setItem(name, value)
    }

    get(name) {
        if (localStorage.getItem(name)) return localStorage.getItem(name)
        else return 'eng'
    }
}