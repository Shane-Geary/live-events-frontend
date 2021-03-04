class Ticket {
    constructor(ticket, ticketAttributes) {
        this.id = ticket.id
        this.title = ticketAttributes.title
        this.date = ticketAttributes.date 
        this.main_act = ticketAttributes.main_act
        this.category = ticketAttributes.category
        Ticket.all.push(this)
    }
    //A constructor enables you to provide any custom initialization that must be done before 
    //any other methods can be called on an instantiated object. If you don't provide your own 
    //constructor, then a default constructor will be supplied for you.

    renderTicket() {
        // debugger 
        return `
        <div data-id=${this.id}>
            <h2>${this.title}</h2>
            <h3>Date: ${this.date}</h3>
            <h3>Main Act: ${this.main_act}</h3>
            <p>Category: ${this.category.name}</p>
        </div>
        <br><br>`;
    }

}

Ticket.all = [];

 