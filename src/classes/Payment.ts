import { HasFormat } from './../interfaces/HasFormater';

export class Payment  implements  HasFormat {
  
    constructor(
        public recipient: string,
        public details: string,
        public amount: number,
    ){
        
    }

    format() {
        return `${this.recipient} is $${this.amount} for ${this.details}`
    }
    
} 