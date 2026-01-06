let image = document.querySelector("img");

let playerTurn = 0;

let currentSocreplayer1UI = document.querySelector("#currentSocreplayer1");
let currentScorePlayer2UI = document.querySelector("#currentSocreplayer2");

let totalScorePlayer1UI = document.querySelector("#totalScorePlayer1");
let totalScorePlayer2UI = document.querySelector("#totalScorePlayer2");

let currentSocreplayer1 = 0;
let currentSocreplayer2 = 0;

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;


document.querySelector("#rolldicebtn").addEventListener("click" , function(){
    console.log("===> mera function chal gaya");

    let diceGeneratedNumber = Math.ceil(Math.random()*6);
    image.src = `dice${diceGeneratedNumber}.png`;
    currentSocreplayer1 += diceGeneratedNumber;
    currentSocreplayer1UI.textContent = currentSocreplayer1;
    console.log(diceGeneratedNumber);
})


document.querySelector("#holddicebtn").addEventListener("click" , function(){
    console.log("===> mera function chal gaya hold click pe");
    if(playerTurn === 0) {
        playerTurn = 1;
        totalScorePlayer1 += scorecurrentplyaer1;
        currentSocreplayer1UI.textContent = 0;
        totalScorePlayer1UI.textContent = totalScorePlayer1;
    }else{
        playerTurn = 0;
        totalScorePlayer2 += scorecurrentplyaer2;
        currentScorePlayer2UI.textContent = 0;
        totalScorePlayer2UI.textContent = totalScorePlayer2;
    }
})

