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
                    <h3>Date: ${this.date}</h3>
                    <h3>Main Act: ${this.main_act}</h3>
                    <p>Category: ${this.category.name}</p>
                    <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
    }

    static findById(id) {
        return this.all.find(ticket => ticket.id === id);
    }

    renderUpdateForm() {
        return `
        <form data-id=${this.id} >
          <h3>Edit this Ticket</h3>
    
          <label>Title</label>
          <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
          <br><br>
    
          <label>Date</label>
          <input id='input-date' name="date" value="">${this.date}</input>
          <br><br>
    
          <label>Main Act</label>
          <input id='input-main-act' type="text" name="main_act" value="${this.main_act}" class="input-text">
          <br><br>
    
          <label>Category</label>
          <select id="categories" name="categories" value="${this.category.name}">
            <option value="1">Concert</option>
            <option value="2">Sport Event</option>
            <option value="3">Theatre</option>
          </select>
          <br><br>
    
          <input id='edit-button' type="submit" name="submit" value="Edit Ticket" class="submit">
        </form>
      `;
    }
}

Ticket.all = [];