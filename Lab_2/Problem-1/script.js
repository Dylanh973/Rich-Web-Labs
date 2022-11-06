window.onload = function(){
    //adding click event listener for when a user clicks add contact
    document.getElementById("addcontact").addEventListener("click", () => {
        //getting the error ID
        document.getElementById("error")
        //getting the value of the Name, number and email from the input boxes
        var nameText = document.getElementById("name1").value;
        var numberText = document.getElementById("number").value;
        var emailText = document.getElementById("email").value;
        //getting the id and tag name of the table 
        var table = document.getElementById('table')
        var table = document.getElementsByTagName('table')[0]

        //error checking
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

        //inserting a new table row for each entry
        var newRow = table.insertRow(1);
        
        //inserting a new cell on each part of the table
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        //inserting the text into the innerHTML
        cell1.innerHTML = nameText;
        cell2.innerHTML = numberText;
        cell3.innerHTML = emailText;

        //resetting the HTML values to be blank
        name1.value = "";
		    number.value = "";
		    email.value = "";

    })

    //Displaying the error message function when an error is triggered, it will display whatever specific error.
    function displayError(message) {
        document.getElementById("errormessage").innerHTML = message;
        //Removes the hidden CSS so the error actually displays.
        document.getElementById("popupmessage").classList.remove("hidden");
    }
        //adds event listener so when the X is clicked, it adds the hidden CSS to hide the error message.
	      document.getElementById("closeerror").addEventListener("click", () => {
		    document.getElementById("popupmessage").classList.add("hidden");
	})
    }
    
  