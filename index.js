const endPoint = "http://localhost:3000/api/v1/tickets";

document.addEventListener('DOMContentLoaded', () => {
    getTickets()

    const ticketForm = document.querySelector("#create-ticket-form")

    ticketForm.addEventListener("submit", (e) => formHandler(e));
})

function getTickets() {
    fetch(endPoint)
    .then(response => response.json())
    .then(tickets => {
        tickets.data.forEach(ticket => {
        const ticketMarkup = `
            <div data-id=${ticket.id}>
                <h2>${ticket.attributes.title}</h2>
                <h3>${ticket.attributes.date}</h3>
                <h3>${ticket.attributes.main_act}</h3>
                <p>${ticket.attributes.category.name}</p>
                <button data-id=${ticket.id}>edit</button>
            </div>
            <br><br>`;

            document.querySelector('#ticket-container').innerHTML += ticketMarkup
        })
    }) 
}

function formHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value 
    const dateInput = document.querySelector("#input-date").value
    const mainActInput = document.querySelector("#input-main-act").value
    const categoryId = parseInt(document.querySelector("#categories").value)
    postFetch(titleInput, dateInput, mainActInput, categoryId)
}

function postFetch(title, date, main_act, category_id) {
    const bodyData = {title, date, main_act, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(ticket => {
        const ticketData = ticket.data
        const ticketMarkup = `
            <div data-id=${ticket.id}>
                <h2>${ticket.attributes.title}</h2>
                <h3>${ticket.attributes.date}</h3>
                <h3>${ticket.attributes.main_act}</h3>
                <p>${ticket.attributes.category.name}</p>
                <button data-id=${ticket.id}>edit</button>
            </div>
            <br><br>`;
            
        document.querySelector("#ticket-container").innerHTML += ticketMarkup;
    })
}