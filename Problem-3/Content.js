//array of images
let giraffeImages = [
    "https://images.pexels.com/photos/6057741/pexels-photo-6057741.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1382156/pexels-photo-1382156.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://media.istockphoto.com/photos/heads-of-two-giraffes-in-front-of-green-trees-picture-id119356838?s=612x612",
	"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=600"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * giraffeImages.length)
    imgs[i].src = giraffeImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Giraffes are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about giraffes and maybe an elephant.";
}

//Auto refresh to get new images
window.setTimeout( function() {
    window.location.reload();
  }, 10000);
