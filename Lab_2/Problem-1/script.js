var TEXT_NODE = 3;

function addcontact(){
    //adding click event listener for when a user clicks add contact
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
    }

            function displayError(message) {
                document.getElementById("errormessage").innerHTML = message;
                //Removes the hidden CSS so the error actually displays.
                document.getElementById("popupmessage").classList.remove("hidden");
            }
                //adds event listener so when the X is clicked, it adds the hidden CSS to hide the error message.
            function closeerror() {
                document.getElementById("popupmessage").classList.add("hidden");
            }
            
            //source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_table_desc couldn't figure it out by myself.

            function sort() {
                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                table = document.getElementById("table");
                switching = true;
                //Set the sorting direction to ascending:
                dir = "asc"; 
                /*Make a loop that will continue until
                no switching has been done:*/
                while (switching) {
                  //start by saying: no switching is done:
                  switching = false;
                  rows = table.rows;
                  /*Loop through all table rows (except the
                  first, which contains table headers):*/
                  for (i = 1; i < (rows.length - 1); i++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    x = rows[i].getElementsByTagName("TD")[0];
                    y = rows[i + 1].getElementsByTagName("TD")[0];
                    /*check if the two rows should switch place,
                    based on the direction, asc or desc:*/
                    if (dir == "asc") {
                      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch= true;
                        break;
                      }
                    } else if (dir == "desc") {
                      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                      }
                    }
                  }
                  if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                    //Each time a switch is done, increase this count by 1:
                    switchcount ++;      
                  } else {
                    /*If no switching has been done AND the direction is "asc",
                    set the direction to "desc" and run the while loop again.*/
                    if (switchcount == 0 && dir == "asc") {
                      dir = "desc";
                      switching = true;
                    }
                  }
                }
              }
