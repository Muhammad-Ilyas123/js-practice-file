console.log("==> Javascript Chal rahi hai.");

let addButton = document.querySelector("#addButton");
let customerName = document.querySelector(".customerName");
let appointdateandTime = document.querySelector(".appointdateandTime");
let ul = document.querySelector(".customerAppointmentList");
let gettingseqNo;
let customerAppointmentList = JSON.parse(localStorage.getItem("customerAppointmentList")) || [];
console.log(customerAppointmentList);

let seqno = 0;

if(!customerAppointmentList == []){
    gettingseqNo  = customerAppointmentList.splice(-1)[0];
}else{
    gettingseqNo = 0
}

addButton.addEventListener("click" , function(){
    seqno = ++gettingseqNo;    
    let appointedCustomer = {
        no : seqno,
        customerName : customerName.value,
        appointedDateTime : appointdateandTime.value
    };
    customerAppointmentList.push(appointedCustomer)
    localStorage.setItem("customerAppointmentList" , JSON.stringify(customerAppointmentList));

    onPageLoad();
    
    customerName.value = "";
    appointdateandTime.value = null;
});

function onPageLoad(){
    
    customerAppointmentList.forEach(function(value){
    let li = document.createElement("li");
    
    li.innerHTML = `
                <span>${value.no}</span>
                <span>${value.customerName}</span>
                <span>${value.appointedDateTime}</span>
                <div class="listOfAppointedButtons">
                    <button class="delete">Delete</button>
                    <button class="edit">Edit</button>
                </div>`

                ul.appendChild(li);
    })

    
}

onPageLoad();

function onExecutionMode(){
    setInterval(() => {
        console.log("==>mai bar bar chaloga");

        let currentDate = new Date();
        console.log(currentDate);
        
    } , 1000)
}

// onExecutionMode();