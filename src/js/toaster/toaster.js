import icons from "../../../assets/images/product/icons/icons.js"

export class Toaster{
    #document = document.querySelector('body')

    constructor(type, message, duration, color) {
        this.type = type || ''
        this.message = message || ''
        this.duration = duration || 3000
        this.color = color || ''
    }

    buildToaster(){
        const styleSheet = document.createElement('link')
        styleSheet.setAttribute('href', '/src/js/toaster/toaster.css')
        styleSheet.setAttribute('rel', 'stylesheet')
        document.querySelector('head').appendChild(styleSheet)

        const toasterBox = document.createElement('div')
        toasterBox.classList.add(`toaster`, this.type)
        toasterBox.innerText = this.message
        toasterBox.innerHTML += icons[this.type]
        toasterBox.style.backgroundColor = `${this.color}`
        this.#document.appendChild(toasterBox)

        toasterBox.addEventListener('click', () => {
            this.closeToaster(toasterBox);
        });

        setTimeout(() => {
            document.body.removeChild(toasterBox);
        }, this.duration);
    }

    closeToaster(toasterBox){
        this.#document.removeChild(toasterBox)
    }
}