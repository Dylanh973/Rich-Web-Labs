window.onload = function(){

    document.getElementById("addcontact").addEventListener("click", () => {
        var nameText = document.getElementById("name").value;
        var numberText = document.getElementById("number").value;
        var emailText = document.getElementById("email").value;
    
        var table = document.getElementsByTagName('table')[0]
        if(!nameText || !numberText || !emailText) {
            displayError("Cannot be blank!")
            return;
        }


        var newRow = table.insertRow(1);
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = nameText;
        cell2.innerHTML = numberText;
        cell3.innerHTML = emailText;



    });

    function displayError(message) {
        document.getElementById("errormessage").innerHTML = message;

    }
}