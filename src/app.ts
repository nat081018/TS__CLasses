
import  {Invoice } from "./classes/Invoice.js"
import {Payment} from "./classes/Payment.js"
import {ListTemplate} from "./classes/ListTemp.js"

import {HasFormat} from "./interfaces/HasFormater.js"



export enum position {
  start,
  end
}


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
      list.render(doc, type.value, position.end )
}

form.addEventListener("submit", handleSubmit)

// tuple
const tupleArr: [string, number] = ["s", 3 ]

// 
let infoStr: any = "gggggggggg"
let valueWithNumber: number = (<string>infoStr).length
// или 
let valueWithString: number = (infoStr as string).length 


// 
const genericType = <T>(arg: T): T  => {
  return arg
}
genericType<string>("ddv") // тоже передавать тип

function identity<T>(arg: T): T {
  return arg;
}
 identity<number>(33)

 const getLengthArg = <T>(arg: T[]): T[] => {
   return arg
 }

 function loggingIdentit<t>(arg: Array<t>): Array<t> {
  console.log(arg.length);  // У массива есть .length, поэтому ошибки больше нет
  return arg;
}

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<t extends="" lengthwise="">(arg: T): T {
//   console.log(arg.length);  // Теперь мы знаем, что у объекта есть свойство .length, поэтому ошибки нет
//   return arg;
// }

function loggingIdentity<T>(arg: T[]): number {
  const res = arg.length
  console.log(arg.length);
  return res
}

let myNewFun: <U>(arg: U[]) => number = loggingIdentity


// classes

interface IInterface {}

class StandartClass {}


abstract class Super extends StandartClass implements IInterface{
  abstract name: string = "your name"
  abstract job: string =  "job"
  public abstract  info(): string

  constructor(){
    super()
  }



}

class ExtendsFromSuper extends Super {
  name: string = "nate"
  job: string = "web dev"
  constructor(name: string){
    super()

    this.name = name
  }
 info() {
   return `my name ${this.name}`
 }
  // не пишу метод info , ошибки нет

  getJobs() {
    return `My job is ${this.job}`
  }

  getJob(name: string) {
    return `My job is ${this.job}`
  }
}

abstract class SubSuperClass  extends Super{}

let res = new ExtendsFromSuper("js dev")
let getName = res.info()
console.log(getName)
let getJob = res.getJobs()
console.log(getJob)
 
abstract class Animal {
  abstract animalName: string
  abstract animalFood: string
  abstract needFood: string
}

abstract class HomeAnimal extends Animal {
  // абстрактный класс не обязан переопределять все абстрактные члены своего супер класса
  public abstract portion(): string
}

class AllInfoAboutAnimal extends HomeAnimal {
  animalName = "Cat"
  animalFood = "Milk"
  needFood = "200ml"

  constructor(
    animalName: string,
    animalFood: string,
    needFood: string
  ){
    super()
    this.animalFood = animalFood
    this.animalName = animalName
    this.needFood = needFood
  }

  portion() {
    return `${this.needFood}`
  }
}

const food: AllInfoAboutAnimal  = new AllInfoAboutAnimal("cat", "milk", "100ml")
// const needFood = food.portion()
// console.log(needFood)

  class Pizza {
  constructor(
    public name: string, 
    public toggle: string[]){}

}

class createPizza {
  static create(event: Pizza){
    return new Pizza(event.name, event.toggle)
  }
}

 const pizza = createPizza.create({ name: "vala", toggle: ["dd", "ll"]})

 
//generics

const arrWithTwoTypes = <T, Y> (x: T, y: Y ): [T, Y] => {
  return [x, y]
}

const resFromArrWithTwoTypes = arrWithTwoTypes<string, number>("mama", 44)

interface name {
  firstName: string,
  lastName: string
}

// const defaultObj = {
//   firstName,
//   lastName
// }

const makeFullName = <T extends {firstName: string, lastName: string}> (obj: T)=> {
  return {
    ...obj, 
    fullName: `${obj.firstName}  ${obj.lastName}` 

  }
}

const getMakeFullName = makeFullName({ firstName: "bob", lastName: "mak", age: 33})
console.log(getMakeFullName)

const removeItem = <TypeItem> (
  arr: Array<TypeItem>,
  item: TypeItem
): Array<TypeItem> => {
  let index = arr.findIndex((i) => i ===  item)
  arr.splice(index, 1)
  return arr
}

const resFromRemoveItem = removeItem<number>([1, 2, 33, 4], 33)
console.log(resFromRemoveItem)
const res2FromRemoveItem = removeItem<string>(['w', 'r', 'y', 'n'], "r") // по значению , или -1
console.log(res2FromRemoveItem)