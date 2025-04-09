/* Notes Web App Functionality */

//Access the HTML Elements for DOM Operations
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

//displays the stored Notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

//adding localStorage for notes
//this will update the data in the browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
} 

/* Create Button Interactivity */
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    
    //paragraph element className & attribute
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');

    //delete icon 
    img.src = 'trash-bin.png';

    //display within the notesContainer the inputbox & img
    notesContainer.appendChild(inputBox).appendChild(img);
})

//delete note functionality
notesContainer.addEventListener("click",  function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        //update the data in the browser  
        updateStorage();
    } 
    
    //anything written within the paragraph, should be updated within the browser
    else if(e.target.tagName === "P"){
      notes = document.querySelectorAll(".input-box");
      notes.forEach(nt => {
        nt.inkeyup = function(){
            updateStorage();
        }
      })
    }
})

document.addEventListener("keydown", event =>{
    //when we click enter on keyboard, it will add a line break in out line tag
    if(event.key === 'Enter'){
    document.execCommand("insertLineBreak");
    //it will also prevent the default feature of the Enter Key
    event.preventDefault();
    }
}) 


