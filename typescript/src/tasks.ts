const tasksForm = document.querySelector<HTMLFormElement>(`.form`)
const tasksInput = document.querySelector<HTMLInputElement>(`.form-input`)
const tasksList = document.querySelector<HTMLUListElement>(`.list`)

type Task = {
    description:string;
    isComplete:boolean 
}

// functions//
//local storage functions
//load items in the localstorage
const loadTask = ():Task[]=>{
    const storedTasks = localStorage.getItem(`tasks`)
    return storedTasks? JSON.parse(storedTasks):[];
} 
// update local storage
const updateStorage = ():void=>{
    localStorage.setItem(`tasks`, JSON.stringify(tasks))
}
//
const renderTask = (task:Task)=>{
    
    const taskElement = document.createElement(`li`)
    taskElement.textContent = task.description
    //checkbox
    const taskCheckBox = document.createElement(`input`)
    taskCheckBox.type = `checkbox`
    taskCheckBox.checked = task.isComplete 

    taskCheckBox.addEventListener(`change`, ()=>{
        task.isComplete = !task.isComplete
        updateStorage()
    })
    taskElement.appendChild(taskCheckBox)
    tasksList?.appendChild(taskElement)
}

const tasks:Task[] = loadTask();
tasks.forEach(renderTask)


const createTask = (event:SubmitEvent)=>{
    event.preventDefault()
    const taskDescription = tasksInput?.value
    if(taskDescription){
        const task:Task = {
            description: taskDescription,
            isComplete: false
        }
        addTasks(task)
        // display task in list
        renderTask(task)
        updateStorage()
        tasksInput.value = ``
    }
    else{
        alert(`please input a task!`)
    }
}
const addTasks=(task:Task):void=>{
    tasks.push(task)
    console.log(tasks)
}




tasksForm?.addEventListener(`submit`, createTask)
