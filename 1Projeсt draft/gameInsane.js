let currentWordArr = ["function", "object", "const", "constructor", ""];    // Define the word to be guessed.
let currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
let displayWord = document.querySelector(".display-word"); // Select the element that will display the word's placeholders.
let modalWins = document.querySelector("#modalWins"); 
let modalFails = document.querySelector("#modalFails"); 
let wordLength = currentWord.length;                  // Get the length of the word.
let letterBtn = document.querySelector("#alphabet");  // Select the keyboard element.
let guessedAttempts = 0;
let failedAttmepts = 0;
let stage = 0;

let startMin = 1;
let countTime = startMin * 59;
let timer = document.getElementById("timer");

let interval = setInterval(newTimer, 1000);

function newTimer() {
    let min = Math.floor(countTime /60);
    let sec = countTime % 60;
    timer.innerHTML =  `${min}: ${sec}`
    countTime--;
    if(countTime === 50){
        stage = 1      
    }
    if(countTime === 40){
        stage = 2      
    }
    if(countTime === 30){
        stage = 3      
    }
    if(countTime === 30){
        stage = 4      
    }
    if(countTime === 10){
        stage = 5      
    }
    if(countTime === 0){
        stage = 6
        modalFails.classList.remove("hidden"); 
    }
    if(countTime === -1){
        clearInterval(interval);
    }
    constructRocket();
}

for(let i = 0; i < currentWord.length; i++){      // Create placeholders for each letter in the word.
    let newLetter = document.createElement("li");    // Create a new list item element for each letter.
    newLetter.classList.add("letters");      // Add a CSS class for styling 
    displayWord.append(newLetter);         // Append the new letter element to the display area.
}

let constuctor = document.querySelector("#rocket-container");
function constructRocket(){
    let maxStage = Math.max(failedAttmepts, stage)
    if(maxStage===1){
        constuctor.src = "images/1.png";
    }
    if(maxStage===2){
        constuctor.src = "images/2.png";
    }
    if(maxStage===3){
        constuctor.src = "images/3.png";
    }
    if(maxStage===4){
        constuctor.src = "images/7.png";
    }
    if(maxStage===5){
        constuctor.src = "images/8.png";
    }
    if(maxStage===6){
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
      
        clickedLetterBtn.disabled = true;
        clickedLetterBtn.style.visibility = "hidden";// Get the letter from the clicked button.
        let fails = document.getElementById("attempt");
        console.log(fails);
        fails.innerHTML = failedAttmepts+ "/6";
    }
     
});