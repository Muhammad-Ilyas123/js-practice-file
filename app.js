let data = [
    {
        id : 1,
        image : "1.jpg",
        name : "Muhammad Ilyas",
        Designation : "Senior Oracle Developer",
        workingSkill : "Hi, I have strong technical skills in HTML, CSS, Bootstrap, JavaScript, and React JS. Additionally, I have 4 years of professional experience with Oracle, where I worked on SQL using PL/SQL tools including Oracle Forms and Reports."
    },
    {
        id : 2,
        image : "2.jpg",
        name : "Muhammad Umair",
        Designation : "Senior web Developer",
        workingSkill : "He is passionate for the modern web development course. He possesses extensive expertise in both front-end web development and backend technologies including Node.js, Express, and C#."
    },
    {
        id : 3,
        image : "3.jpg",
        name : "Muhammad Owais",
        Designation : "Full Stack Developer",
        workingSkill : "I specialize in full-stack development with strong frontend skills in React and backend expertise in Node.js. My 4 years of Oracle experience adds robust database management capabilities to my profile."
    },
    {
        id : 4,
        image : "4.jpg",
        name : "Muhammad Hussain",
        Designation : "Angular Developer",
        workingSkill : "I've practical experience in Angular development including creating components, services, implementing routing, handling forms, and making API calls. I'm eager to contribute to real-world projects and enhance my skills further under guidance."
    },
    {
        id : 5,
        image : "5.jpg",
        name : "Muhammad Younus",
        Designation : "Data Scientist",
        workingSkill : "Experienced in developing and deploying machine learning models for predictive analytics, performing statistical analysis on large datasets, and creating interactive dashboards to communicate insights to stakeholders effectively."
    }
];


let heading = document.createElement("h1");
let ImageElem = document.createElement("img");
let NameElem = document.createElement("h1");
let DesigElem = document.createElement("h3");
let WorkeingSkillsElem = document.createElement("p");
let btnRightElem = document.createElement("button");
let btnLeftElem = document.createElement("button");
let btnDiv = document.createElement("div");
let getMainDIv = document.querySelector("#mainDiv");

let num = 1;

btnRightElem.addEventListener("click" , ClickHandlerRight);
btnLeftElem.addEventListener("click" , ClickHandlerLeft);

function renderData(){

    getMainDIv.innerHTML = "";
    
        let vCurrent = data.find((i) => i.id === num);
        if(!vCurrent) return;
            
            
            NameElem.textContent = vCurrent.name;
            DesigElem.textContent = vCurrent.Designation;
            WorkeingSkillsElem.textContent = vCurrent.workingSkill;
                btnRightElem.innerHTML = '<i class="fa-etch fa-solid fa-arrow-right"></i>';
                btnLeftElem.innerHTML = '<i class="fa-etch fa-solid fa-arrow-left"></i>';
                heading.textContent = "Our Review";
                heading.setAttribute("id" , "heading")
            btnLeftElem.setAttribute("id" , "leftBtn");
            btnRightElem.setAttribute("id" , "rightBtn");
            ImageElem.setAttribute("src" , vCurrent.image);
            ImageElem.setAttribute("id" , "image");

            let btnDiv = document.createElement("div");
            btnDiv.setAttribute("id" , "btnDiv");

            btnDiv.appendChild(btnLeftElem);
            btnDiv.appendChild(btnRightElem);

            getMainDIv.appendChild(heading);
            getMainDIv.appendChild(ImageElem);
            getMainDIv.appendChild(NameElem);
            getMainDIv.appendChild(DesigElem);
            getMainDIv.appendChild(WorkeingSkillsElem);
            getMainDIv.appendChild(btnDiv);
};

function ClickHandlerRight(){
    ++num;
    if(num > data.length) num = 5;
    console.log(num);
    
    renderData()
};


function ClickHandlerLeft(){
    --num;
    if(num < 1) num = 1;
    console.log(num);
    
    renderData()
};
renderData();