import { PictureLoader } from '../../js/loader/picture-loader.js'
import { ProductService } from '../../js/product-list/product-service.js'
import { ProductTile } from './product-tile.js'
import { Toaster } from '../../js/toaster/toaster.js'
import './product-tile.css'

/**
 * StockComponent
 * @version 1.0.0
 *  - Load product stock
 *  - Sort stock by alpha order
 *  - Display stock as simple tile list
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */

export class StockComponent {

    #app = null
    /**
     * Component title
     * @var string
     */
    #title = 'My Stock'

    /**
     * Template to use to render
     * @var string
     */
    #template = ''

    /**
     * Product service
     * @var ProductService
     */
    #service = null

    /**
     * Products to display alphabetical sorted
     * @var Array<Product>
     */
    #products = []

    constructor() {
        this.#service = new ProductService()
        this.#app = document.querySelector('[app]')
    }


    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        this.#onInit()
    }

    async #onInit() {
        const loader = new PictureLoader()

        const toasterSuccess = new Toaster('success', 'Operation succeeded !', 3000, '#A4CCB4')
        const toasterFail = new Toaster('fail', 'Operation failed !', 3000, '#FE343B')
        const toasterWarning = new Toaster('warning', 'Warning !', 3000, '#FEAC48')
        const toasterInfo = new Toaster('info', 'Info !', 3000, '#188BC9')

        this.#products = await this.#service.findAll()
        this.#products.sort((p1, p2) => p1.label.localeCompare(p2.label))
        
        this.#template += `<div class="product-list" role="list">`
        
        for (const product of this.#products) {
            const tile = new ProductTile()
            tile.setParameter('product', product)
            this.#template += tile.render()
        }
        this.#template += '</div>'

        this.#app.innerHTML = this.#template

        loader.dismiss(1)

        toasterFail.buildToaster()
    }
}