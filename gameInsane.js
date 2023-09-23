let currentWordArr = ["function", "object", "const", "constructor", "global"];    
let currentWord = currentWordArr[Math.floor(Math.random() * currentWordArr.length)];
let displayWord = document.querySelector(".display-word"); 
let wordLength = currentWord.length;                
let letterBtn = document.querySelector("#alphabet"); 

let guessedAttempts = 0;
let failedAttmepts = 0;
let modalWins = document.querySelector("#modalWins"); 
let modalFails = document.querySelector("#modalFails"); 
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
    if(countTime === 20){
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

for(let i = 0; i < currentWord.length; i++){      
    let newLetter = document.createElement("li");    
    newLetter.classList.add("letters");      
    displayWord.append(newLetter);         
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
      
        clickedLetterBtn.disabled = true;
        clickedLetterBtn.style.visibility = "hidden";
    }
     
});

let constuctor = document.querySelector("#rocket-container");
function constructRocket(){
    let maxStage = Math.max(failedAttmepts, stage)
    if(maxStage===1){
        constuctor.src = "images/i1.png";
    }
    if(maxStage===2){
        constuctor.src = "images/i2.png";
    }
    if(maxStage===3){
        constuctor.src = "images/i3.png";
    }
    if(maxStage===4){
        constuctor.src = "images/i4.png";
    }
    if(maxStage===5){
        constuctor.src = "images/i5.png";
    }
    if(maxStage===6){
        constuctor.src = "images/i6.png";
        modalFails.classList.remove("hidden"); 
    }
    let fails = document.getElementById("attempt");
    fails.innerHTML = maxStage + "/6";
}

