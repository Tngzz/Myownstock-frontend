import './form.css'

export class Form {

    #template = `
    <div class="container">
        <form class = form" onSubmit = "return(ValidationForm)">
            <label for="fname">id</label>
            <input type="text" id="fname" name="id" placeholder="id" required>

            <label for="lname">Label</label>
            <input type="text" id="lname" name="lastname" placeholder="Label" required>

            <label for="quantite" placeholder= "Stock :"</label>
            <input type="number" id="Stock" name="Stock" min="0" max="100" step="1" required>

            <input type="submit" value="Add">
        </form>
    </div>`

    render () {
        return this.#template
    }

    displayForm() {
        const formElement = document.createElement('div')
        formElement.innerHTML = this.render()
        document.body.appendChild(formElement)
    }
}

// function ValidationForm () {
//         var id = document.getElementById("fname").value
//         // var name = document.getElementById("lname").value
//         // var stock = document.getElementById("Stock").value

//         var idError = document.getElementById("idError")
//         // var nameError = document.getElementById("nameError")
//         // var stockError = document.getElementById("stockError")

//         // idError.innerHTML = ''

//         var isValid = true

//         if (id === "") {
//             idError.innerHTML = "Veuillez saisir un ID.";
//             isValid = false
//         }
// }

// ValidationForm ()