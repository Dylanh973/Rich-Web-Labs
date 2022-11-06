//https://api.github.com/users/${value}
//https://api.github.com/users/${value}/repo


function searchUser1(){
        var container = document.getElementById("list");
        container.replaceChildren();

        var username123 = document.getElementById("usernameG").value;
        
        fetch(`https://api.github.com/users/${username123}/repos`)
        .then(results => results.json())
        .then((repos) => repos.forEach((repo) => {
            var table = document.getElementById("list");
            var newRow = table.insertRow(table.length);
            cell0 = newRow.insertCell(0);
            cell0.innerHTML = `Name: ${repo.name} <br> Description: ${repo.description}` 

            if(repos.length > 5){
                UserReposFloat.style.overflow="scroll";
            } else{
                UserReposFloat.style.overflow="auto";
            }
        }))


        fetch("https://api.github.com/users/"+username123)
        .then((searchresult) => searchresult.json())
        .then((data) => {
        document.getElementById("image").innerHTML = `<img src="${data.avatar_url}" style="height: 150px; width: 100% place"/>`
        document.getElementById("name").innerHTML = `${data.name}`
        document.getElementById("username").innerHTML = `${data.login}`
        document.getElementById("email").innerHTML = `${data.email}`
        document.getElementById("location").innerHTML = `${data.location}`
        document.getElementById("noofgists").innerHTML = `${data.public_gists}`
        })}