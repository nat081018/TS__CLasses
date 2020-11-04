import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemp.js";
export var position;
(function (position) {
    position[position["start"] = 0] = "start";
    position[position["end"] = 1] = "end";
})(position || (position = {}));
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector("ul");
const form = document.querySelector('.new-item-form');
console.log(form.children);
console.log(ul);
const list = new ListTemplate(ul);
const handleSubmit = (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, position.end);
};
form.addEventListener("submit", handleSubmit);
// tuple
const tupleArr = ["s", 3];
// 
let infoStr = "gggggggggg";
let valueWithNumber = infoStr.length;
// или 
let valueWithString = infoStr.length;
// 
const genericType = (arg) => {
    return arg;
};
genericType("ddv"); // тоже передавать тип
function identity(arg) {
    return arg;
}
identity(33);
const getLengthArg = (arg) => {
    return arg;
};
function loggingIdentit(arg) {
    console.log(arg.length); // У массива есть .length, поэтому ошибки больше нет
    return arg;
}
// interface Lengthwise {
//   length: number;
// }
// function loggingIdentity<t extends="" lengthwise="">(arg: T): T {
//   console.log(arg.length);  // Теперь мы знаем, что у объекта есть свойство .length, поэтому ошибки нет
//   return arg;
// }
function loggingIdentity(arg) {
    const res = arg.length;
    console.log(arg.length);
    return res;
}
let myNewFun = loggingIdentity;
class StandartClass {
}
class Super extends StandartClass {
    constructor() {
        super();
        this.name = "your name";
        this.job = "job";
    }
}
class ExtendsFromSuper extends Super {
    constructor(name) {
        super();
        this.name = "nate";
        this.job = "web dev";
        this.name = name;
    }
    info() {
        return `my name ${this.name}`;
    }
    // не пишу метод info , ошибки нет
    getJobs() {
        return `My job is ${this.job}`;
    }
    getJob(name) {
        return `My job is ${this.job}`;
    }
}
class SubSuperClass extends Super {
}
let res = new ExtendsFromSuper("js dev");
let getName = res.info();
console.log(getName);
let getJob = res.getJobs();
console.log(getJob);
class Animal {
}
class HomeAnimal extends Animal {
}
class AllInfoAboutAnimal extends HomeAnimal {
    constructor(animalName, animalFood, needFood) {
        super();
        this.animalName = "Cat";
        this.animalFood = "Milk";
        this.needFood = "200ml";
        this.animalFood = animalFood;
        this.animalName = animalName;
        this.needFood = needFood;
    }
    portion() {
        return `${this.needFood}`;
    }
}
const food = new AllInfoAboutAnimal("cat", "milk", "100ml");
// const needFood = food.portion()
// console.log(needFood)
class Pizza {
    constructor(name, toggle) {
        this.name = name;
        this.toggle = toggle;
    }
}
class createPizza {
    static create(event) {
        return new Pizza(event.name, event.toggle);
    }
}
const pizza = createPizza.create({ name: "vala", toggle: ["dd", "ll"] });
//generics
const arrWithTwoTypes = (x, y) => {
    return [x, y];
};
const resFromArrWithTwoTypes = arrWithTwoTypes("mama", 44);
// const defaultObj = {
//   firstName,
//   lastName
// }
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName}  ${obj.lastName}` });
};
const getMakeFullName = makeFullName({ firstName: "bob", lastName: "mak", age: 33 });
console.log(getMakeFullName);
const removeItem = (arr, item) => {
    let index = arr.findIndex((i) => i === item);
    arr.splice(index, 1);
    return arr;
};
const resFromRemoveItem = removeItem([1, 2, 33, 4], 33);
console.log(resFromRemoveItem);
const res2FromRemoveItem = removeItem(['w', 'r', 'y', 'n'], "r"); // по значению , или -1
console.log(res2FromRemoveItem);
