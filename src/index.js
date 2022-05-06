import render from "./utilities/render";
import Key from "./utilities/key";
import "./style.scss";

render('div', ['test'],new Key('low', 'up', 'code').create() ,document.body, ['test', 'test'])

