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

