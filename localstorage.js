console.log("===> javascript running");
let userData = {};

let data = JSON.parse(localStorage.getItem("userData")) || [];
console.log(data);


let createElemId = document.createElement("h1");
let createElemName = document.createElement("h1");
let createElemEmail = document.createElement("h1");
let bodyElem = document.querySelector("body");

document.querySelector("button").addEventListener("click" , function(e){
    e.preventDefault();
    console.log("===> function Chala");
    let allfields = document.querySelectorAll("input");
    allfields.forEach((data) => {
  
        userData[data.placeholder] = data.value;
    })
    console.log(userData);

    localStorage.setItem("userData" ,  JSON.stringify(userData));
    document.querySelectorAll("input").values = "";

    if(userData){
        setTimeout(() => {
            data = JSON.parse(localStorage.getItem("userData")) ;

            createElemId.textContent = data.ID;
            createElemName.textContent = data.userName;
            createElemEmail.textContent = data.Email;

            bodyElem.appendChild(createElemId);
            bodyElem.appendChild(createElemName);
            bodyElem.appendChild(createElemEmail);
        } , 5000)
        
    }
})

createElemId.textContent = data.ID;
createElemName.textContent = data.userName;
createElemEmail.textContent = data.Email;

bodyElem.appendChild(createElemId);
bodyElem.appendChild(createElemName);
bodyElem.appendChild(createElemEmail);