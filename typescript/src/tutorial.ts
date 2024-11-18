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
type staff = manager | employee
type employee = {id:number;name:string;department:string}
type manager = {id:number;name:string;employees:employee[]}

let chike:employee = {id:123, name:`chike`, department:`customer service`}
let fawas:employee = {id:123, name:`fawas`, department:`customer representative`}
let nzube:manager = {id:123, name:`nzube`, employees:[chike, fawas]}

function printStaffDetails(staff:staff){
    if(`employees` in staff){
        console.log(`${staff.name} is a manager with ${staff.employees.length} employees`)
    }
    else{
        console.log(`${staff.name} is a employee in ${staff.department} department`)
    }
}
printStaffDetails(chike)
//  console.log(staffDetails)


