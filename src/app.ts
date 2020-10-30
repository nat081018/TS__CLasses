
import  {Invoice } from "./classes/Invoice.js"
import {Payment} from "./classes/Payment.js"
import {ListTemplate} from "./classes/ListTemp.js"

import {HasFormat} from "./interfaces/HasFormater.js"


const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLUListElement
const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);
console.log(ul);

const list = new ListTemplate(ul)



const handleSubmit = (e: Event) => {
  e.preventDefault()
  let doc: HasFormat
  if(type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
      list.render(doc, type.value, "end")
}

form.addEventListener("submit", handleSubmit)



