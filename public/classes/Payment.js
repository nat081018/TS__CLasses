export class Payment {
    constructor(recipient, // без 
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is $${this.amount} for ${this.details}`;
    }
}
