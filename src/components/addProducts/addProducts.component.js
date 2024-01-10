import { Form } from './form'

export class addProductsComponent {
    #title = 'Add Products'
    #template = ``
    
    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template
        this.#onInit()
    }

    async #onInit () {
        this.#template += `<div class="container">`
    }
}