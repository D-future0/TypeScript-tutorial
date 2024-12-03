// console.log('tutorial')
// let greetingMessage = "hello"
// greetingMessage = greetingMessage.toUpperCase()

// let request: 'pending'| 'success'| 'failed' = 'pending'
// request = 'pending'

// let cost : number| string = 100

// let books = ['GST102', 'GST104','MTH101']
// let foundBook:string | undefined
// for (let book of books) {
//    if (book === "MTH101") {
//     foundBook= book
//     break;
//    }

// }
// let pen = {title: 'leo smart', cost: 50}
// let book = {title: 'tweenty leaves'}
// let item: { readonly title:string, cost?:number}[] = [pen, book]
// const calculateDiscount = (price:number):number=>{
//     return price * 0.8
// }

//  let finalPrice = calculateDiscount(300)
// function calculateScore(totalPoint:number, penaltyPoint:number = 0):number{
//  return totalPoint - penaltyPoint
// }
// let finalScoreWithPenalty = calculateScore(300, 100)
// let finalScoreWithoutPenalty = calculateScore(300)
//  function sum(message:string, ...numbers:number[]){
//     console.log(numbers.map(num => 2 * num))
//     let total = numbers.reduce((prev:number, current:number):number=>{
//         return prev + current
//     })
//     console.log(total)
//     return `${message} ${total}`
//  }
//  const result = sum('total number is ', 2,4,6,8)

//type guard

// const input = (input:string|number)=>{
//     if(typeof input === "number"){
//         console.log(input -1)
//     }
//     else{
//         console.log(input)
//     }
// }
// input(2)
// function createStudent(student: {id:number; name:string}) {
//     console.log(`hello ${student.name} !!`)
// }
// const newStudent= {id: 345, name:"collins"}
// createStudent(newStudent)
// createStudent({id:856, name: `mathew`})

// function processData(input:number|string, config : {reverse: boolean}={reverse: false}) {
//     if(typeof input === "number"){
//         return input * 2
//     }
//     return config.reverse? input.toUpperCase().split("").reverse().join(""): input
// }

// const userInput = processData(`is it raining outside ?`, {reverse: true})
// const userInput = processData(20)

//type aliases
// type user = {id:number;name:string;isActive:boolean}
// const chike:user = {id:123, name:`chike`, isActive:false}
// type staff = manager | employee
// type employee = {id:number;name:string;department:string}
// type manager = {id:number;name:string;employees:employee[]}

// let chike:employee = {id:123, name:`chike`, department:`customer service`}
// let fawas:employee = {id:123, name:`fawas`, department:`customer representative`}
// let nzube:manager = {id:123, name:`nzube`, employees:[chike, fawas]}

// function printStaffDetails(staff:staff){
//     if(`employees` in staff){
//         console.log(`${staff.name} is a manager with ${staff.employees.length} employees`)
//     }
//     else{
//         console.log(`${staff.name} is a employee in ${staff.department} department`)
//     }
// }

// printStaffDetails(chike)

// type Book = {
//   id: number;
//   title: string;
//   price: number;
//   inStore?: boolean;
//   printTitle(): void;
//   printPrice(message: string): void;
//   printInstore:()=>string
// };
// type discountedBook = Book & { discount: number };

// const book1: Book = {
//   id: 132,
//   title: "book1",
//   price: 35,
//   inStore:false,
//   printTitle() {
//     console.log(this.title);
//   },
//   printPrice(message) {
//     console.log(`${message} $${this.price}`);
//   },
//   printInstore:()=>{
//     return book1.inStore? `${book1.title} is in store`: `${book1.title} is not in store`
//   }
// };
// const book2: Book = { id: 132, title: "book2", price: 25, inStore: true };
// const book3: discountedBook = {
//   id: 132,
//   title: "book3",
//   price: 37,
//   discount: 0.55,
// };
// console.log(book1);
// console.log(book2);
// console.log(book3);
// book1.printTitle();
// book1.printPrice("book1 price is");
// const result = book1.printInstore()

//interface
// interface Computer{
//   id:number;
//   brand:string;
//   ram:number;
//   ramUpgrade(amount:number):number;
//   storage?:number;
// }

// let laptop:Computer={
//   id:123,
//   brand:`hp`,
//   ram:4,
//   ramUpgrade(amount){
//     return this.ram + amount
//   }
// }
// laptop.storage = 256
// console.log(laptop.ramUpgrade(4));

//extend interface//

// interface person{
//   name:string;
//   address:string;
// }
// interface person{
//   age:number
// }
// interface car{
//   brand:string;
//   carDetails():void;
// }

// interface carOwn extends person, car  {

// }
// const person:person = {
//   name: `vivian`,
//   address: `lokoja, kongi`,
//   age: 25
// }
// const person2: carOwn = {
//   name: `fawas`,
//   address: `ikeja, lagos`,
//   age:37,
//   brand:`toyota`,
//   carDetails(){},
// }

// function personalDetails(){
//   let random = Math.random()
//   console.log(random)
//   if(random < 0.5){
//     return person
//   // console.log(person)
//   }
//   else{
//     return person2
// // console.log(person2);
//   }
// }

// const identity: person|carOwn = personalDetails()
// console.log(identity);
// console.log(person2);

// ReadOnly//

// let date: readonly [number,number,number,] = [20,11,2024]
// date.push(55)
// console.log(date)

//enum

// enum personRole{
//     admin=`admin`,
//     manager=`manager`,
//     employee=`employee`,
// }

// interface user{
//     id:number,
//     name:string,
//     role:personRole,
//     email:string
// }
// let user:user = {
//     id:123,
//     name:`mike`,
//     role:personRole.manager,
//     email:`mike123@gmail.com`
// }
// console.log(user)

// type assertion 

// type Bird = {
//     name:string
// }
// retrieving data from DB
// let birdString = `{"name":"Pigeon"}`
// let birdObject = JSON.parse(birdString)
// let bird = birdObject as Bird 

// console.log(bird)

// unknown //

// function retrieveDate(){
//     let random = Math.random()
//     if(random > 0.33){
//         throw new Error(`unable to retrieve data`)
//     }else{
//         throw `Data sucessfully retrieved`
//     }
// }

// try {
//     retrieveDate()
// } catch (error) {
//     if( error instanceof Error){
//         console.log(error.message)
//     }else{
//         console.log(error)   
//     }
// }


// type guard (typeOf)

// type valueType = string|number|boolean

// let value:valueType
// let random = Math.random()
// value = random <0.25? `you win` : random <0.4? 404 : false

// function checkValue(value:valueType):void{
//     if(typeof value === 'string'){
//         console.log(value.toUpperCase())
//         return;
//     }
//     if(typeof value === 'number'){
//         console.log(value.toFixed(2))
//         return;
//     }
//     console.log(`boolean : ${value}`)
// }
// checkValue(value)

// type guard (equality)

// type Dog = {type:'dog'; name:string; bark: ()=> void}
// type Cat = {type:'cat'; name:string; meow:()=> void}
// type animal = Dog|Cat

// function animalSound(animal:animal){
//     if(animal.type === 'dog'){
//         animal.bark()
//     }else{
//         animal.meow()
//     }
// }
// type guard (in)

// function animalSound(animal:animal){
//     if('bark' in animal){
//         animal.bark()
//     }else{
//         animal.meow()
//     }
// }

// // discriminated union

// type Increment = {
//     type:`increase`;
//     name:string;
//     salary:number
// }
// type decrement = {
//     type:`decrease`;
//     name:string;
//     salary:number
// }

// type Action = Increment|decrement;

// function reducer(bonus:number, action:Action){
//     switch(action.type){
//         case `increase`:
//         return bonus + action.salary;
//         case `decrease`:
//         return bonus - action.salary;
//         default:
//             const unexpectedAction:never = action
//             throw new Error (`unexpected action : ${unexpectedAction}`)
//     }
// }

//generic function

// function generatArray<T>(length:number, value:T):Array<T>{
//     let result:T[] = []
//     result = Array(length).fill(value)
//     return result
// }

// let stringArray = generatArray<string>(3, `hello`)
// let numberArray = generatArray<number>(6, 999)
// console.log(stringArray)
// console.log(numberArray)

// function temp<T extends number|string>(value:T):T{
//     console.log(value)
//     return value
// }
// temp(`hello`)

// type Employee = {
//     name:string;
//     department:string
// }
// type Manager = {
//     name:string;
//     employees:number
// } 
// const person:Manager = {
//     name:`collins`,
//     employees:3
// }
// const person2:Employee = {
//     name:`ifechukwu`,
//     department:'IT'
// }
// function printValue<T extends {name:string}>(person:T):void{

//     console.log(person.name)
// }
//  printValue(person)

//validate data with zod
// import {z} from 'zod'
// const url = `https://www.course-api.com/react-tours-project`

// const tourSchema = z.object({
//     id:z.string(),
//     name:z.string(),
//     info:z.string(),
//     image:z.string(),
//     price:z.string(),
// })

// type Tour = z.infer<typeof tourSchema>

// async function fetchData(url:string): Promise<Tour[]>{
//     try {
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error(`HTTP error! status : ${response.status}`)
//         }
//         const rawData:Tour[] = await response.json()
//         const result = tourSchema.array().safeParse(rawData)
//         console.log(result)
//         if(!result.success){
//             throw new Error(`can not fetch data : ${result.error}`)
//         }

//         return result.data
//     } catch (error) {
//         const errMessage = error instanceof Error ? error.message : `there was an error`;
//         console.log(errMessage)
//         return []
//     }
// }

// const tour = await fetchData(url)
// tour.map((tour)=>{
//     // return tour.name
//     console.log(tour.name)
// })

//classes
// class Book{
//     id:number;
//     title:string;
//     private checkOut: boolean = false
//     constructor(id:number, title:string){
//         this.id= id
//         this.title = title
//     }
//     public checkedOut(){
//         this.checkOut = this.toggleCheckOut()
//     }
//     isCheckOut(){
//          return this.checkOut
//     }
//     private toggleCheckOut(){
//         return !this.checkOut
//     }
// }

// const book1 = new Book(123,`book1`)
// const status = !book1.isCheckOut()
// console.log(status)

//getter and setter//
// class Book{
//     private checkOut: boolean= false
//     constructor(public id:number, public name:string){}
//     get info(){
//         return `name: ${this.name}`
//     }
//     set isCheckedOut(checkedOut:boolean){
//         this.checkOut = checkedOut 
//     }
// }

// const book = new Book(8, 'Red flag')
// book.isCheckedOut = true
// console.log(book)

//impliment//
interface Iperson{
    name:string,
    age:number
}
class Person implements Iperson{
    constructor(public name:string, public age:number){}
    getInfo():void{
        console.log(`my name is ${this.name} and i am ${this.age}years old`)
    }
}
const person = new Person('ayo ponky', 26)
person.getInfo()
console.log(person)