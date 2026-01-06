let data = [
    {
        id : 1,
        heading1 : "History",
        p1 : "History Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam laboriosam, magnam at aperiam fuga! Recusandae ducimus suscipit aut incidunt. Accusamus at, quibusdam nulla quis facilis labore reprehenderit dolorem. Corrupti? Neque voluptate obcaecati nemo optio ratione nisi a nesciunt temporibus quae quibusdam labore.",
        btn : "history"
    },
    {
        id : 2,
        heading1 : "Vision",
        p1 : "Vision Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam laboriosam, magnam at aperiam fuga! Recusandae ducimus suscipit aut incidunt. Accusamus at, quibusdam nulla quis facilis labore reprehenderit dolorem. Corrupti? Neque voluptate obcaecati nemo optio ratione nisi a nesciunt temporibus quae quibusdam labore.",
        btn : "vision"
    },
    {
        id : 3,
        heading1 : "Goals",
        p1 : "Goals Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam laboriosam, magnam at aperiam fuga! Recusandae ducimus suscipit aut incidunt. Accusamus at, quibusdam nulla quis facilis labore reprehenderit dolorem. Corrupti? Neque voluptate obcaecati nemo optio ratione nisi a nesciunt temporibus quae quibusdam labore.",
        btn : "goals"
    },
]

function UI() {
    document.querySelector("body").innerHTML = `
    <div id="main">
        <div class="titleDiv">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    <div class="imageParent">
    <div class="imgDiv">
        <img src="./desert.jpg" alt="">
    </div>
    <div class="containDiv">
    <div class="btnsDiv">
        <button class="btn history active" onClick = historyHandler()>History</button>
        <button class="btn vision" onClick = visionHandler()>Vision</button>
        <button class="btn goals" onClick = goalsHandler()>Goals</button>
    </div>
    <div class="headingDescript">
     ${data.map((d) => {
        if (d.id === 1) {
            return `<h3>${d.heading1}</h3>
                <p class=p1>${d.p1}</p>`   
        }
    })}
    </div>
    </div>
    </div>
    </div>
`;    
}

UI();

let btnDiv2 = document.querySelectorAll("button");

btnDiv2.forEach((i) => {
    console.log(i.classList);
    
})

let createElemh1 = document.createElement("h3");
let createElemP = document.createElement("p");
let btn1 = document.querySelector(".history");
let btn2 = document.querySelector(".vision");
let btn3 = document.querySelector(".goals");
createElemP.setAttribute("class" , "p1")


function historyHandler(){
    data
        .filter(f => f.id === 1)
        .map(e => {
            let clearHeadingOrDescription = document.querySelector(".headingDescript");
            clearHeadingOrDescription.innerHTML = '';
            createElemh1.textContent = e.heading1;
            createElemP.textContent = e.p1;
            if(e.btn === "history"){
                btn1.classList.add("active");
                btn2.classList.remove("active");
                btn3.classList.remove("active");
            }
            clearHeadingOrDescription.appendChild(createElemh1);
            clearHeadingOrDescription.appendChild(createElemP);
             return e;
        });
}



function visionHandler(){
    data
        .filter(f => f.id === 2)
        .map(e => {
            let clearHeadingOrDescription = document.querySelector(".headingDescript");
            clearHeadingOrDescription.innerHTML = '';
            createElemh1.textContent = e.heading1;
            createElemP.textContent = e.p1;
            if(e.btn === "vision"){
                btn1.classList.remove("active");
                btn2.classList.add("active");
                btn3.classList.remove("active");
            }
            clearHeadingOrDescription.appendChild(createElemh1);
            clearHeadingOrDescription.appendChild(createElemP);
            return e;
        });
}


function goalsHandler(){
    data
        .filter(f => f.id === 3)
        .map(e => {
            let clearHeadingOrDescription = document.querySelector(".headingDescript");
            clearHeadingOrDescription.innerHTML = '';
            createElemh1.textContent = e.heading1;
            createElemP.textContent = e.p1;
            if(e.btn === "goals"){
                btn1.classList.remove("active");
                btn2.classList.remove("active");
                btn3.classList.add("active");
            }
            clearHeadingOrDescription.appendChild(createElemh1);
            clearHeadingOrDescription.appendChild(createElemP);
            return e;
        });
}


