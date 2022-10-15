    function addNewnote(){
        noteID = 0;
        const noteDiv = document.createElement("noteDiv");
        noteDiv.id = "noteID" + noteID;
        noteID++;

        noteDiv.className="noteBox";

        noteDiv.style.backgroundColor = document.getElementById("noteColor").value;

        document.body.appendChild(noteDiv);
        
        let noteContents = document.createTextNode(
            document.getElementById("noteInfo").value);
            noteDiv.appendChild(noteContents);

            

    }

 function updateNote() {


 }

 function deleteNote(noteID) {

 }