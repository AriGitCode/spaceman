
let currentWordArr = ["error", "array", "class", "boolean", "log", "defer", "null"];    
let currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
let displayWord = document.querySelector(".display-word"); 
let wordLength = currentWord.length;                 
let letterBtn = document.querySelector("#alphabet"); 
let guessedAttempts = 0;
let failedAttmepts = 0;
let modalWins = document.querySelector("#modalWins"); 
let modalFails = document.querySelector("#modalFails"); 


for( let i = 0; i < currentWord.length; i++){      
    let newLetter = document.createElement("li");    
    newLetter.classList.add("letters");     
    displayWord.append(newLetter);         
}

let constuctor = document.querySelector("#rocket-container");
function constructRocket(){
    if(failedAttmepts===1){
        constuctor.src = "images/2.png";
    }
    if(failedAttmepts===2){
        constuctor.src = "images/3.png";
    }
    if(failedAttmepts===3){
        constuctor.src = "images/4.png";
    }
    if(failedAttmepts===4){
        constuctor.src = "images/5.png";
    }
    if(failedAttmepts===5){
        constuctor.src = "images/6.png";
    }
    if(failedAttmepts===6){
        constuctor.src = "images/7.png";
    }
    if(failedAttmepts===7){
        constuctor.src = "images/8.png";
    }
    if(failedAttmepts===8){
        constuctor.src = "images/9.png";
    }
    if(failedAttmepts===9){
        constuctor.src = "images/rocket.gif";
        modalFails.classList.remove("hidden"); 
    }
}

letterBtn.addEventListener("click", function(e){  
    e.preventDefault()     
    console.log(e);
    let clickedLetterBtn = e.target; 
    if(e.target.tagName.toLowerCase() === 'button'){
        let clickedLetter = clickedLetterBtn.innerHTML;
        let listOfLetters = document.getElementsByClassName("letters");
        let contains = false;
        for(let i = 0; i < wordLength; i++){     
            if(currentWord.charAt(i)=== clickedLetter){ 
                guessedAttempts += 1; 
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
        clickedLetterBtn.style.visibility = "hidden";
        let fails = document.getElementById("attempt");
        fails.innerHTML = failedAttmepts+ "/9";
    }
     
});

 