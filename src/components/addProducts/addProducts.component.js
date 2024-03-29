import { Form } from './form'

export class addProductsComponent {
    #title = 'Add Products'
    #form = new Form()
    
    load() {
        const title = document.querySelector('h1');
        title.innerHTML = this.#title;

        const app = document.querySelector('[app]');
        app.innerHTML = '';
        
        this.#form.displayForm();
    }
}