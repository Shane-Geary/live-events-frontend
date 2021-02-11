class Ticket {
    constructor(ticket, ticketAttributes) {
        this.id = ticket.id
        this.title = ticketAttributes.title
        this.date = ticketAttributes.date 
        this.main_act = ticketAttributes.main_act
        this.category = ticketAttributes.category
        Ticket.all.push(this)
    }

    renderTicket() {
        // debugger 
        return `
                <div data-id=${this.id}>
                    <h2>${this.title}</h2>
                    <h3>${this.date}</h3>
                    <h3>${this.main_act}</h3>
                    <p>${this.category.name}</p>
                    <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
    }
}

Ticket.all = [];