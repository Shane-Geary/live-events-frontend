const endPoint = "http://localhost:3000/api/v1/tickets";

document.addEventListener('DOMContentLoaded', () => {
    getTickets()

    const ticketForm = document.querySelector("#create-ticket-form")

    ticketForm.addEventListener("submit", (e) => formHandler(e));
})

function getTickets() {
    fetch(endPoint)
    //parse response to json 
    .then(response => response.json())
    //iterate over the parsed data
    .then(tickets => {
        //sort listed tickets alphabetically
        tickets.data.sort(function(a, b) {
            const ticketA = a.attributes.title;
            const ticketB = b.attributes.title;
            if (ticketA < ticketB) {
                return -1;
            }
            if (ticketA > ticketB) {
                return 1;
            }
                return 0;
        });
        tickets.data.forEach(ticket => {
            let newTicket = new Ticket(ticket, ticket.attributes)
            //select element where data should go to 
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
    //The parseInt() function parses a string and returns an integer
    const categoryId = parseInt(document.querySelector("#categories").value)
    postFetch(titleInput, dateInput, mainActInput, categoryId) 
}

//application/json headers option is the correct Content-Type for JSON encoded data
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