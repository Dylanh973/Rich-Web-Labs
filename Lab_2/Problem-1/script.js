window.onload = function(){

    document.getElementById("addcontact").addEventListener("click", () => {
        document.getElementById("error")
        var nameText = document.getElementById("name1").value;
        var numberText = document.getElementById("number").value;
        var emailText = document.getElementById("email").value;
    
        var table = document.getElementsByTagName('table')[0]

        if(!nameText || !numberText || !emailText) {
            displayError("Cannot be blank!")
            return;
        }

        if(nameText.length > 20) {
            displayError("Name must be less than 20 characters")
            return;
        }

        if(nameText.match(/[^a-zA-Z\s]/)){
            displayError("Name must only contain alphabet letters and spaces")
            return;
        }

        if(numberText.length !== 10) {
            displayError("Phone number must be 10 digits")
            return;
        }

        if(!emailText.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            displayError("Email error, please enter a valid email address")
            return;
        }

        error.parentNode.removeChild(error)

        var newRow = table.insertRow(1);
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = nameText;
        cell2.innerHTML = numberText;
        cell3.innerHTML = emailText;

        name1.value = "";
		number.value = "";
		email.value = "";

        

    });

    function displayError(message) {
        document.getElementById("errormessage").innerHTML = message;
    }
}