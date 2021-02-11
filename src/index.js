const endPoint = "http://localhost:3000/api/v1/tickets";

document.addEventListener('DOMContentLoaded', () => {
    getTickets()

    const ticketForm = document.querySelector("#create-ticket-form")
    ticketForm.addEventListener("submit", (e) => formHandler(e));

    const ticketContainer = document.querySelector("#ticket-container")
    ticketContainer.addEventListener("click", e => {
        const id = parseInt(e.target.dataset.id);
        const ticket = Ticket.findById(id);
        document.querySelector("#update-ticket").innerHTML = ticket.renderUpdateForm();
    });
    document.querySelector("#update-ticket").addEventListener("submit", e => updateForm(e))
})

function getTickets() {
    fetch(endPoint)
    .then(response => response.json())
    .then(tickets => {
        tickets.data.forEach(ticket => {
            let newTicket = new Ticket(ticket, ticket.attributes)

            document.querySelector('#ticket-container').innerHTML += newTicket.renderTicket()
            // debugger
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
        console.log(ticket);
        const ticketData = ticket.data
        let newTicket = new Ticket(ticketData, ticketData.attributes)
            
        document.querySelector('#ticket-container').innerHTML += newTicket.renderTicket()
    })
}

function updateForm(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const ticket = Ticket.findById(id);
    const title = e.target.querySelector('#input-title').value;
    const date = e.target.querySelector('#input-date').value;
    const main_act = e.target.querySelector('#main-act').value;
    const category_id = parseInt(e.target.querySelector('#categories').value);
    patchSyllabus(ticket, title, date, main_act, category_id)
  }