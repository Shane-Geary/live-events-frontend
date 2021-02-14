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
        return `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Title: ${this.title}</h2>
            <br>
            <h3 class="card-date">Date: ${this.date}</h3>
            <br>
            <h3 class="card-mainAct">Main Act: ${this.main_act}</h3>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">Category: ${this.category.name}</small>
            </div>
          </div>
        </div>
      </div>
        `

        // debugger 
        // return `
        //         <div data-id=${this.id}>
        //             <h2>${this.title}</h2>
        //             <h3>Date: ${this.date}</h3>
        //             <h3>Main Act: ${this.main_act}</h3>
        //             <p>Category: ${this.category.name}</p>
        //         </div>
        //         <br><br>`;
    }

    static findById(id) {
        return this.all.find(ticket => ticket.id === id);
    }
}

Ticket.all = [];