
var answered = false;

var answer = "";

while (answered === false)
{
    answer = prompt("Are we there yet?");
    if (answer === "yeah" || answer === "yes")
    {
        alert("Yay! We made it.");
        answered = true;
    }
    
}

var object = {
    name: "Ted Dragonsen",
    house: "House Dragonsen",
    class: "Battlemage"
}

object.foreach(function(e) {
    
})