let inputFromTextArea = document.querySelector('.inputText');
inputFromTextArea.addEventListener("keydown",
function getInput(event){
    if(event.key === "Enter" ){
        const inputText = inputFromTextArea.value;
        event.currentTarget.value="";
        console.log(inputText);
        displayTask(inputText);
    }
});

function displayTask(inputText){
    let displayArea = document.querySelector('.task');
}