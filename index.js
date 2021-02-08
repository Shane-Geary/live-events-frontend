const endPoint = "http://localhost:3000/api/v1/tickets";

document.addEventListener('DOMContentLoaded', () => {
    getTickets()
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