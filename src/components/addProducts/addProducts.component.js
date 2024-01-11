import { Form } from './form'

export class addProductsComponent {
    #title = 'Add Products'
    #template = `Add products to your stock !`
    #form = new Form()
    
    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template
        this.#form.displayForm()
    }  
}