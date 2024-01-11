import './form.css'

export class Form {

    #template = `
    <div class="container">
        <form id="myForm">
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

        const myForm = document.getElementById('myForm');
        myForm.addEventListener('submit', this.handleFormSubmission.bind(this));
    }

    handleFormSubmission(event) {
        event.preventDefault();

        const formData = {
            id: document.getElementById('fname').value,
            label: document.getElementById('lname').value,
            stock: document.getElementById('Stock').value
        };

        fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse du serveur:', data);
        })
        .catch(error => {
            console.error('Erreur lors de la requête Fetch:', error);
        });
    }
}

