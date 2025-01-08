// Lets grab every element required

const todoInput=document.getElementById("todo-input");
const addTaskBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

// making an array to store the object values
const tasks=[];

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
    
            todoInput.value = ""; // Clear the input box
            console.log(tasks);
        }
    });
    