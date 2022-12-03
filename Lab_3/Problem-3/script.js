
let noteID = 1; 

let editButton = document.getElementById('editnote')
let editnote = Rx.Observable.fromEvent(editButton, 'click')

let addButton = document.getElementById('addnote')
let addnote = Rx.Observable.fromEvent(addButton, 'click')

let deleteButton = document.getElementById('deletenote')
let deletenote = Rx.Observable.fromEvent(deleteButton, 'click')

addnote.subscribe(() => {

    //Declaring note ID
    const noteDiv = document.createElement("noteDiv");
    
    //Incrementing the notes everytime 1 is created
    noteDiv.id = "noteID" + noteID;
    noteID++;

    //Giving the divs a classname so that I can style them all
    noteDiv.className="noteDiv";

    
    //Styling the background of each div with the noteColor selected from the 4 options
    noteDiv.style.backgroundColor = document.getElementById("noteColor").value;

    //Updating the note div with the style
    document.body.appendChild(noteDiv);

    
    //Inserting the data from the text box into the div
    let noteContents = document.createTextNode(
        //grabbing the value of the noteInfo text area
        document.getElementById("noteInfo").value);
        //appending the new contents into the div
        noteDiv.appendChild(noteContents);
    });


 deletenote.subscribe(() => {
    //Getting the note ID that the user wishes to delete
    noteid = prompt("Please enter the note ID you wish to delete");
    //passing the selected id to the deleteNote function
    deleteNote(noteid);
 });

 function deleteNote(noteid) {
    //selects the specific note id
    noteID = document.getElementById(noteid);
    //removes it
    noteID.remove(noteid);

 }

 editnote.subscribe(() => {
    //Gets the note id the user wishes to edit
    noteid = prompt("please enter a note ID");
    //Passing the selected it to the editNote function
    editNote(noteid);
 });

 
function editNote(noteid) {
    //gets the new text to be added to the div
    const text = prompt("Please enter the new text")
    //selects the div and adds the text
    document.getElementById(noteid).innerHTML = text;
}
