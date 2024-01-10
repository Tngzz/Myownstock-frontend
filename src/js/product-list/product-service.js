import { ProductDeserializer } from "./product-deserializer.js"
import { ProductTile } from "../../components/stock/product-tile.js";

export class ProductService {
    /**
     * Name of the localStorage key
     * @var string
     */
    #productKey = 'product'
    /**
     * Template to use to render
     * @var string
     */
    #template = ''
    
    /**
     * Returns all products for the defined key
     * @returns array
     */
    async findAll() {
       // await this.showLoadingIcon()
        const response = await fetch("http://localhost:8080/products")
        const products = await response.json();
        
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.statusText}`);
        }
        
       // this.hideLoadingIcon()
        return ProductDeserializer.deserializeArray(products)
    }

  /*  async showLoadingIcon() {
        return new Promise((resolve) => {
            const app = document.querySelector('body');

            if (!this.#template) {
                this.#template = document.createElement('div');
                this.#template.className = 'background-loader';
                this.#template.innerHTML = '<div class="loader"></div>';
                app.appendChild(this.#template);
                console.log("Loading icon displayed");
            }

            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

   async hideLoadingIcon() {
        return new Promise((resolve) => {
            if (this.#template) {
                this.#template.remove();
                this.#template = null;
                console.log("Loading icon hidden");
            }

            setTimeout(() => {
                resolve();
            }, 0);
        });
    }*/

    async showToaster(){
        const toaster = document.createElement('div')
        toaster.id = ''  
    }


    findOne(id) {}

    add(item) {}

    remove(item) {}
}