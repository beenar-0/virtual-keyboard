export default function render(elem, classList, child, parent, ...attributes) {
    const element = document.createElement(elem)
    classList.forEach((item)=>{
        element.classList.add(item)
    })
    if (typeof child === "object" && child !== null) {
        child.forEach((item)=>{
            element.appendChild(item)
        })
    } else {
        element.innerHTML = child
    }
    if (parent) parent.appendChild(element)
    attributes.forEach((item)=>{
        if (item[0].match(/id|value|placeholder|cols|rows|autocorrect|spellcheck/)) {
            element.setAttribute(item[0], item[1])
        } else {
            element.dataset[item[0]] = item[1]
        }
    })
    return element
}