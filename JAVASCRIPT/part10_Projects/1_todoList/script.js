<<<<<<< HEAD
// I have to do anything whenever the DOM content is loaded:-

document.addEventListener("DOMContentLoaded",()=>{
    // Lets grab every element required
=======
// Lets grab every element required
>>>>>>> 1bae0f1 (added task in array todolist)

const todoInput=document.getElementById("todo-input");
const addTaskBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

<<<<<<< HEAD
// making an array to store the object values 
// for first time it will be empty but after wards it should read from local storage
// in local storage everything is in object format to parse in object

const tasks= JSON.parse(localStorage.getItem("tasks"))||[];

// i am also displaying every tasks on the console

tasks.forEach((task)=>renderTask(task));
=======
// making an array to store the object values
const tasks=[];
>>>>>>> 1bae0f1 (added task in array todolist)

// Addiing Event listener on adding some input and clicking on add Task btn

addTaskBtn.addEventListener("click",()=>{
    const taskText=todoInput.value.trim(); // triming unnnecessary spaces
    
    // check mark if its empty then simply return
    if(taskText==="") return;

    // Lets create an object from it and we will push this always in the array
    const newTask={
        id: Date.now(), // providing the random id lets say date as it changes every time
        task:taskText,
        completed: false  // a default boolean checkmark to manipulate things like is task completed or not
    }
       // lets add this task into the arrray
       tasks.push(newTask);

       todoInput.value=""; // clearing input box
       console.log(tasks);
});

    //  Adding  tasks on Enter key press as well

    todoInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const taskText = todoInput.value.trim(); // trimming unnecessary spaces
            
            // If the input is empty, return without doing anything
            if (taskText === "") return;
    
            // Create a new task object
            const newTask = {
                id: Date.now(), // Unique ID using timestamp
                task: taskText,
                completed: false // Default task completion status
            };
    
            // Add the new task to the tasks array
            tasks.push(newTask);
<<<<<<< HEAD
            saveTask();

            todoInput.value = ""; // Clear the input box
            console.log(tasks);
        
    // Lets make a function to add  tasks to local storage when called everytime

    function saveTask(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    // Lets also make a Function to read from the local storage
    function renderTask(task){
        console.log(task);
    }
}
    });
    

})
=======
    
            todoInput.value = ""; // Clear the input box
            console.log(tasks);
        }
    });
    
>>>>>>> 1bae0f1 (added task in array todolist)
