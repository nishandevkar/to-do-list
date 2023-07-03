// Adds a new Task
function addTask(){
    
    // Get the value entered from the input box 
    let taskDetails = document.getElementById("addTask").value;

    // if Task details is non-empty
    if(taskDetails.length > 0){

        // Get list of existing Task(s)
        let taskList = document.getElementById("taskList");

        // Create a new Task using Task details and add it to the existing Task(s) list
        taskList.appendChild(createTask(taskDetails));

        // Clear the input box after successsful addition
        document.getElementById("addTask").value = "";

    }

}

// Creates a new Task using Task details
function createTask(taskDetails){

    // Create a new <li> element
    let newTask = document.createElement("li");

    // Add the 'list-group-item' class
    newTask.classList.add("list-group-item");

    // Add Task details as the inner text of <li> element
    newTask.textContent = taskDetails;

    // Add the ability to strike-through text on click 
    newTask.onclick = taskClick;

    return newTask;
}


/** On click toggle the text styling. */
function taskClick(){
    let strike = 'strike';
    
    // Get the HTML element from thr event
    let elm = event.target;

    elm.classList.contains(strike) ? elm.classList.remove(strike) : elm.classList.add(strike);

}