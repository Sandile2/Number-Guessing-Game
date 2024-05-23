let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener("click", function(){
    let input = document.getElementById("userinput").value;
    if (input ==number){
        output.innerHTML = 'You guessed right, Your number was ${number}'
    } else if (input < number){
        output.innerHTML = ' You gussed too low ha ha sorry'
    };
    if (input > number){
        output.innerHTML = 'You guessed too high'
    }
});