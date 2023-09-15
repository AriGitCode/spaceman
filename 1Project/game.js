let currentWord = "console";    // Define the word to be guessed.
let displayWord = document.querySelector(".display-word"); // Select the element that will display the word's placeholders.
let wordLength = currentWord.length;                  // Get the length of the word.
let letterBtn = document.querySelector("#alphabet");  // Select the keyboard element.
let guessedAttempts = 0;
let failedAttmepts = 0;

for( let i = 0; i < currentWord.length; i++){      // Create placeholders for each letter in the word.
    let newLetter = document.createElement("li");    // Create a new list item element for each letter.
    newLetter.className = "letters";      // Add a CSS class for styling 
    displayWord.append(newLetter);         // Append the new letter element to the display area.
}

letterBtn.addEventListener("click", function(e){  // Add a click event listener to the keyboard.
    e.preventDefault()     // Prevent the default form submission behavior
    console.log(e);
    let clickedBtn = e.target; // Get the clicked button element.
    if(e.target.tagName.toLowerCase() === 'button'){
        let clickedLetter = clickedBtn.innerHTML;
        let listOfLetters = document.getElementsByClassName("letters");
        let contains = false;
        for(let i = 0; i < wordLength; i++){     // Loop through each character in the word.
            if(currentWord.charAt(i)=== clickedLetter){ 
                guessedAttempts += 1; // Check if the current character matches the clicked letter.
                listOfLetters[i].innerHTML = clickedLetter;
                contains = true;
            }
        }
        if(!contains){
            failedAttmepts += 1;
        } 
        // Disable the clicked button.
        
        clickedBtn.disabled = true;
        clickedBtn.style.visibility = "hidden";// Get the letter from the clicked button.
        let fails = document.getElementById("attempt");
        fails.innerHTML = failedAttmepts;
        console.log(fails);
    }
     
});

 