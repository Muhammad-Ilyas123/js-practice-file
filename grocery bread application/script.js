let addButton =  document.querySelector("#addBtn");
let updateBtn =  document.querySelector("#updateBtn");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

let getGroceryData = JSON.parse(localStorage.getItem("getGroceryData")) || [];   



addButton.addEventListener("click" , function(e){
 
    
    if(input.value.trim().length > 0){
        let li = document.createElement("li");
   
    getGroceryData.push(input.value);
    localStorage.setItem("getGroceryData" , JSON.stringify(getGroceryData));

    lordData();

    
    input.value = null;
    input.focus();
    }
    else{
        alert("Field is Empty");
        input.value = null;
        input.focus();
    }
});

function updateButton(indxValue){
    console.log(indxValue);
    
    getGroceryData.splice(indxValue , 1 , input.value);

    localStorage.setItem("getGroceryData" , JSON.stringify(getGroceryData));

    lordData();
    
    addButton.classList.toggle("nonActive");
    updateBtn.classList.toggle("nonActive");

    input.value = "";
};



function deleteHandler(groceryIndex){
   
    getGroceryData.splice(groceryIndex , 1);

    localStorage.setItem("getGroceryData" , JSON.stringify(getGroceryData));

    lordData();
}

function lordData(){
    ul.innerHTML = ``;
    
        getGroceryData.forEach(function(item , idx){
            
            let li = document.createElement("li");
             li.innerHTML = `${item}
                <div class="btn">
                    <i class="fa-solid fa-pen-to-square" onclick="editHandler(${idx})"></i>
                    <i class="fa-solid fa-trash" onclick="deleteHandler(${idx})"></i>
                </div>`;
            
            ul.appendChild(li);
        })
}


lordData();

function editHandler(indexValue){
    input.value = getGroceryData[indexValue];
    updateBtn.setAttribute("onclick" , `updateButton(${indexValue})`)
    console.log(addButton.classList.toggle("nonActive"));
    console.log(updateBtn.classList.toggle("nonActive"));
}