document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let firstName = e.target.children[0].value;
    let lastName = e.target.children[1].value;
    let country = e.target.children[2].value;
    let score = e.target.children[3].value;
    let errorMessage = document.querySelector(".main_error-prompter")
    errorMessage.style.display = "none"
    if(firstName==="" || lastName === "" || country==="" || score===""){
        errorMessage.style.display = "block"
    }
    else{
        let scoreBoardContainer = document.querySelector(".main_scoreboard-wrapper");
        let scoreBoardElement = document.createElement("div");
        scoreBoardElement.classList.add("main_scoreboard");

        //to get Date and time
        const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        let d = new Date();
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = h + ":" + m + ":" + s;

        let mon = month[d.getMonth()];
        let year = d.getFullYear();
        let da = addZero(d.getDate())
        let date = mon + " "+  da + ", " + year;

        scoreBoardElement.innerHTML = `
        <div>
        <p class = "main_player-name"> ${firstName} ${lastName}</p>
        <p class="main_time-stamp">${date}, ${time}</p>
        </div>
        <p class="main_player-country">${country}</p>
        <p class="main_player-score">${score}</p>
        <div class="main_scoreboard-btn-container">
            <button>🗑</button>
            <button>+5</button>
            <button>-5</button>
        </div>
        `;
        scoreBoardContainer.appendChild(scoreBoardElement);
        activateButton()
        sortAndAppend();
    }
})
//Activate buttons
function activate(e) {
    let btnTarget = e.target.innerText;
    let scores = e.target.parentElement.parentElement.children[2];
    scores.style.transition = "0.5s ease-in-out"
  
    if (btnTarget === "🗑") {
        e.target.parentElement.parentElement.remove();
    }
    else if(btnTarget==="+5"){
        scores.style.transform = "scale(1.5)"
        setTimeout(()=>{
            scores.style.transform = "scale(1)"
        },100)
        scores.innerText = parseInt(scores.innerText)+5    
    }
    else if(btnTarget==="-5"){
        scores.style.transform = "scale(1.5)"
        setTimeout(()=>{
            scores.style.transform = "scale(1)"
        },100)
        scores.innerText = parseInt(scores.innerText)-5    
    }
    sortAndAppend();
}
function activateButton() {
    //function for activating the buttons in each scoreboard element.

    [...document.querySelectorAll(".main_scoreboard-btn-container")].map(el => {
        el.addEventListener("click", activate);
    });
}

//to sorting and reappending all elements
function sortAndAppend() {
    let scoreBoardContainer = document.querySelector(".main_scoreboard-wrapper");
    let data = [...document.querySelectorAll(".main_scoreboard")];

    //* sort the data array based on the player's score

    data.sort((a, b) => {
        return parseInt(b.querySelector(".main_player-score").textContent) - parseInt(a.querySelector(".main_player-score").textContent);
    });

    //* clear the existing elements

    while (scoreBoardContainer.firstChild) {
        scoreBoardContainer.removeChild(scoreBoardContainer.firstChild);
    }

    //* append the sorted elements back to the container

    data.forEach((element) => {
        scoreBoardContainer.appendChild(element);
    });
}
sortAndAppend();
activateButton();
