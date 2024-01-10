
export class Form {

    #template = `
    <div class="container">
        <form class = Form">
            <label for="fname">id (*)</label>
            <input type="text" id="fname" name="id" placeholder="id">

            <label for="lname">Label(*)</label>
            <input type="text" id="lname" name="lastname" placeholder="Label">

            <label for="quantite" placeholder= "Stock :"</label>
            <input type="number" id="Stock" name="Stock" min="0" max="100" step="1">

            <input type="submit" value="Add">
        </form>
    </div>`

    render () {
        return this.#template
    }

    displayForm() {
        const formElement = document.createElement('div');
        formElement.innerHTML = this.render();

        document.body.appendChild(formElement);
    }
}

const myForm = new Form()
myForm.displayForm()

