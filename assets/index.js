$( document ).ready(function() {
    $("#number-maker").on("click", function() {
        console.log("clicked")

        var NumberArray = [ ]
        for(var i = 0; i < 5; i++)
        var randomNumber =  Math.floor(Math.random() * 20)
        numbers.push(randomNumber)
    
});
});

//click handler for 
// create an empty array to hold the numbers i generate
// for loop that loops five times that makes a random number
// add random number to array
// make the array in to a string, goin the elements together.