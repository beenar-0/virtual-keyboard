import render from "./render";

export default class Key {
    constructor(low, up, code) {
        this.code = code
        this.low = low
        if (up === 'null') this.up = low
        else this.up = up
        this.isFunc = !code.match(/^Key[A-Z]$/);
    }

    setActive(){

    }

}
