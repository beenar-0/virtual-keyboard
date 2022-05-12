export default class Localstore {
    constructor() {
    }

    localSet(name, value) {
        localStorage.setItem(name, value)
    }

    localGet(name) {
        if (localStorage.getItem(name)) return localStorage.getItem(name)
    }
}