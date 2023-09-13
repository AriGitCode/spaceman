let currentWord = "console";
let displayWord = document.querySelector(".display-word");
let wordLength = currentWord.length;
let letterBtn = document.querySelector("#keyboard");


for( let i = 0; i < currentWord.length; i++){
    let newLetter = document.createElement("li");
    newLetter.className = "letters";
    displayWord.append(newLetter);
}

letterBtn.addEventListener("click", function(e){
    e.preventDefault()
    console.log(e);
    let clickedBtn = e.target;
    /*if(e.target =)*/
    let clickedLetter = clickedBtn.innerHTML
    let contains = false
    for(let i = 0; i < wordLength; i++){
        if(currentWord.charAt(i)=== clickedLetter){
            contains = true;
            break
        }
    }
    if(contains){
        
    }else{
        clickedBtn.disabled = true;
        clickedBtn.style.visibility = "hidden";
    }
});

