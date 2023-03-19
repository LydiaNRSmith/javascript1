function submitData(){
    //get minimum value from form
    let min = document.forms["guessForm"]["min"].value;
    
    //convert min value to float
    min = parseFloat(min);

    //alert("you entered: " + min);
    
    //get maximum value from form
    let max = document.forms["guessForm"]["max"].value;

    //convert max value to float
    max = parseFloat(max);

    //alert("you entered: " + max);
    
    //check if both numbers are integers and min is less than max
    if(Number.isInteger(min) && Number.isInteger(max) && min < max){
        numberGuessGame(min,max);
    }else if(Number.isInteger(min) == false){
        //calls updateDOM if min not a valid integer
        let myVal = "Min number is not a valid integer. Please enter an integer";
        updateDOM(myVal, "red");
    }else if(Number.isInteger(max) == false){
        //calls updateDOM if max not a valid integer
        let myVal = "Max number is not a valid integer. Please enter an integer.";
        updateDOM(myVal, "red");
    }else{
        //calls updateDOM if min not less than max
        let myVal = "Min value is not less than max value.";
        updateDOM(myVal, "red");
    }

}

//form validation function
function updateDOM(value, color){
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}

function numberGuessGame(min, max){
    let num = Math.ceil(randomNumber(min, max));
    if(num == min){
        num +=1;
    }else if(num ==max){
        num -=1;
    }
    let guess;
    let message = "I'm thinking of a number between " + min + " and " + max + ". Try to guess it.";
    do {
        if(guess < num){
            
            message = "Too low try again!";
        }else if(guess > num){
            
            message = "Too high try again!";
        }
        guess = parseInt(prompt(message));
    } while(guess!== num);
    updateDOM("You got the right number!", "green");

}

//produce random number
 function randomNumber(min, max) { 
        return Math.random() * (max - min) + min;
    } 