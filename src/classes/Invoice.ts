import { HasFormat } from './../interfaces/HasFormater';

export  class Invoice implements HasFormat {
   
    constructor(
        readonly client: string, 
        public details: string, 
        public amount: number,
    ){}
  
    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }