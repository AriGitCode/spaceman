
let currentWordArr = ["error", "array", "function", "classes", "log", "defer", "null"];    // Define the word to be guessed.
let currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
let displayWord = document.querySelector(".display-word"); // Select the element that will display the word's placeholders.
let modalWins = document.querySelector("#modalWins"); 
let modalFails = document.querySelector("#modalFails"); 
let wordLength = currentWord.length;                  // Get the length of the word.
let letterBtn = document.querySelector("#alphabet");  // Select the keyboard element.
let guessedAttempts = 0;
let failedAttmepts = 0;



for( let i = 0; i < currentWord.length; i++){      // Create placeholders for each letter in the word.
    let newLetter = document.createElement("li");    // Create a new list item element for each letter.
    newLetter.classList.add("letters");      // Add a CSS class for styling 
    displayWord.append(newLetter);         // Append the new letter element to the display area.
}

let constuctor = document.querySelector("#rocket-container");
function constructRocket(){
    if(failedAttmepts===1){
        constuctor.src = "images/1.png";
    }
    if(failedAttmepts===2){
        constuctor.src = "images/2.png";
    }
    if(failedAttmepts===3){
        constuctor.src = "images/3.png";
    }
    if(failedAttmepts===4){
        constuctor.src = "images/4.png";
    }
    if(failedAttmepts===5){
        constuctor.src = "images/5.png";
    }
    if(failedAttmepts===6){
        constuctor.src = "images/6.png";
    }
    if(failedAttmepts===7){
        constuctor.src = "images/7.png";
    }
    if(failedAttmepts===8){
        constuctor.src = "images/8.png";
    }
    if(failedAttmepts===9){
        constuctor.src = "images/9.png";
        modalFails.classList.remove("hidden"); 
    }
}

letterBtn.addEventListener("click", function(e){  // Add a click event listener to the keyboard.
    e.preventDefault()     // Prevent the default form submission behavior
    console.log(e);
    let clickedLetterBtn = e.target; // Get the clicked button element.
    if(e.target.tagName.toLowerCase() === 'button'){
        let clickedLetter = clickedLetterBtn.innerHTML;
        let listOfLetters = document.getElementsByClassName("letters");
        let contains = false;
        for(let i = 0; i < wordLength; i++){     // Loop through each character in the word.
            if(currentWord.charAt(i)=== clickedLetter){ 
                guessedAttempts += 1; // Check if the current character matches the clicked letter.
                listOfLetters[i].innerHTML = clickedLetter;
                contains = true;
            }
        }
        if(guessedAttempts ===currentWord.length){
           modalWins.classList.remove("hidden"); 
        }
        if(!contains){
            failedAttmepts += 1;
            constructRocket()
        } 
        // Disable the clicked button.
        console.log(modal);
        clickedLetterBtn.disabled = true;
        clickedLetterBtn.style.visibility = "hidden";// Get the letter from the clicked button.
        let fails = document.getElementById("attempt");
        fails.innerHTML = failedAttmepts+ "/9";
    }
     
});

 