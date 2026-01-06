// // let a = ["Muhammad Ilyas" , "Muhammad Hussain", "Muhammad Younus" ];

// // let b = ["Muhammad Shoaib" , "Muhammad Ibrahim", "Muhammad Hanif" , "Muhammad Sabir" ];


// // console.log(a.slice(0,1));
// // console.log(b.splice(0,2));


// // let c = a.slice(0,1);
// // let d = b.splice(0,2);


// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);


// function fun1() {
//     let a = 'Muhammad Ilyas';
//     return function(designation){
//         console.log(`My Name is ${a} and ${designation}`);
//         let b = "Muhammad Hussain";
//         return function(){
//             console.log(`Mera Name ${a} hai mere bhai ka name ${b}`);
//         }
//     }
// };

// // fun1();

// let b = fun1();
// b("developer")();


// function totalBrothersName(...broName){
//     console.log(...broName);
    
// }

// totalBrothersName("Muhammad Ilyas" , "Muhammad Hussain" , "Muhammad Younus");



// let obj1 = {
//     name : "Haleema",
//     qulification : "Matric",
//     school : "Muslim public School",
//     totalBrother : 4
// };

// let obj2 = {
//     ...obj1,
//     totalBrother : 3
// };

// console.log(obj1);
// console.log(obj2);


// let arr1 = ["Muhammad Rayyan" , "Muhammad Rohan" , "Muhammad Azan"];
// let arr2 = ["Muhammad Ilyas" , "Muhammad Hussain" , "Muhammad Sufiyan" , "Muhammad Younus"];

// let [arrFirstValue , arrSecondValue] = arr1;
// let [arr2FirstValue , arr2SecondValue] = arr2;

// console.log(arrFirstValue , arrSecondValue);
// console.log(arr2FirstValue , arr2SecondValue);



// let obj3 = {
//     name : "Haleema",
//     qulification : "Matric",
//     school : "Muslim public School",
//     totalBrother : 4,
//     age : 13
// };

// let {name , age} = obj3;
// console.log(name , age);


// function practiceForDestructuring(params1){
//     // console.log(params1.qulification , params1.school);
    
//     let {qulification , school} = params1;
//     console.log(qulification , school );
    
// };



// let obj4 = {
//     name : "Haleema",
//     qulification : "Matric",
//     school : "Muslim public School",
//     totalBrother : 4,
//     age : 13
// };


// practiceForDestructuring(obj4)


// // const obj = {
// //   name: 'John',
// //   greet: function() {
// //     console.log(this.name);
// //   }
// // };
// // obj.greet();


// const obj5 = {
//   name: 'John',
//   greet: () => {
//     console.log(this);
//   }
// };
// obj5.greet();


// function func(){
//     let var1 = "main function variable";
//     return function(){
//         return var1;
//     }
// }

// let funcValue = func();
// console.log(funcValue());


// function increment(){
//     let incremental = 1;
//     return function(){
//          incremental += 1;
//          return function(){
//             incremental += 1;
//             return function(){
//                 return incremental += 1;
//             }
//          }
//     }
// };

// let valueI = increment()()()();
// console.log(valueI);


// function reverseWords(params){
//     let valueSplit = params.split(' ').reverse().join(' ');
//     console.log(valueSplit);
// };

// reverseWords("hello world")


// function findTotalvowelWords(para){
//     let vowelWords = 'aeiou';
//     let splitSentence = para.toLowerCase().split('');
//     let vowelSplit =  vowelWords.split('');
//     let totalNumber = 0;
//     vowelSplit.map((vowSplit) => {
//         splitSentence.map((senSplit) => {
//             if(vowSplit == senSplit){
//                 totalNumber += 1;
//             }
//         })
//     })
//     console.log(totalNumber);
// };

// findTotalvowelWords("Rohan Here");


// /*koe b function jo bana hwa hai usko object se jorne k liye call , apply , bind use karte hai.*/

// /* call or apply or bind mai farq ye hai k call apne andar argument alag alag leta hai jb k apply array mai leta hai.
// bind mai hm function.bind(objectname) phr is ko jis b variable mai assign karna chayye kar skte hai*/


// const obje1 = {
//     name2 : 'Muhammad Ilyas',
//     fatherName : "Muhammad Ramzan",
//     cnic : "42201-1847350-7",
//     mobileNumber : "0310-2085846",
//     getobjeValue :  (learning , working , softwarhouseNmae) => {
//         console.log(`Hello , I am ${this.name2} my father Name is ${this.fatherName}
//                     i have cnic card which number is ${this.cnic} and have sim which number is 
//                     ${this.mobileNumber} I am learning a course ${learning} , currently i am working ${working},
//                     my software house name is ${softwarhouseNmae} ` );
//     }
// };


// let getObjeValueFromobje1 = obje1.getobjeValue;
// let parameterValue = ["web n app" , "As Senior Oracle Developer" , "UnikrewSolution(pvt ltd)"]
// console.log(getObjeValueFromobje1.apply(obje1 , parameterValue));
 

// // function std1() {
// //     console.log(`my school name is ${this.schoolName} I am studying in ${this.class}`);
// // };

// let std1 = () => {
//      console.log(`my school name is ${this.schoolName} I am studying in ${this.class}`);
// }

// let std1Obj = {
//     schoolName : "Anjum Secondary School",
//     class : "Bachlor in Computer Science"
// };

// std1.call(std1Obj);

// // let cardtitle = document.querySelector(".card-title");
// // let cardtext = document.querySelector(".card-text");

// // function apiCall(){
// //  fetch("https://jsonfakery.com/movies/simple-paginate")
// //                         .then(respons => {return  respons.json()})
// //                         .then(respons => {
// //                             let {data} = respons;
// //                             let {original_title , overview} = data[0];
// //                             cardtitle.textContent = original_title ;
// //                             cardtext.textContent = overview;
// //                             console.log(data);
// //                             console.log(original_title , overview);
                            
// //                         });
// // }

// // apiCall();

// let formselect = document.querySelectorAll(".form-select");


// // let input = document.querySelector("input");
// let button = document.querySelector("button");
// let myApiKey = 'd3a7695290764b63bee6f371f2c03237';

// button.addEventListener("click" , getCurrentCountryDetail)

// function getCurrentCountryDetail() {
//     console.log(input.value);
    
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${input.value}&key=d3a7695290764b63bee6f371f2c03237`)
//         .then(response => response.json())
//         .then(data => {
//             let {results} = data;
//             let {annotations} = results[0];
//             let {currency} = annotations;
//             let {iso_code , symbol} = currency;
//             console.log(iso_code , symbol);
            
//             getCountryCode(iso_code)
            
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }



// function getCountryCode(countryCode){
//     fetch(`https://v6.exchangerate-api.com/v6/94a7ac279ee5acf7e02ef60c/latest/${countryCode}`)
//     .then(response => response.json())
//     .then(data => {
//         let {conversion_rates} = data;
//         let objIntoArr = Object.keys(conversion_rates);
//         console.log(objIntoArr);
        
//         objIntoArr.forEach((value) => {
//             let createOption = document.createElement("option");
//             createOption.value = value;
//             createOption.text = value;
            
//             formselect.forEach((val) => {
//                 val.appendChild(createOption.cloneNode(true));
                
//             })
//         })
        
        
//     })
// };




// function getCountryValue(countryCode ){
//     fetch(`https://v6.exchangerate-api.com/v6/94a7ac279ee5acf7e02ef60c/latest/${countryCode}`)
//     .then(response => response.json())
//     .then(data => {
//         let {conversion_rates} = data;
//         let objIntoArr = Object.keys(conversion_rates);
//         console.log(objIntoArr);
        
//         objIntoArr.forEach((value) => {
//             let createOption = document.createElement("option");
//             createOption.value = value;
//             createOption.text = value;
            
//             formselect.forEach((val) => {
//                 val.appendChild(createOption.cloneNode(true));
                
//             })
//         })
        
        
//     })
// }


// let input = document.querySelector("input");
// input.addEventListener("click" , getCountryValue("USD"));

// getCountryCode("USD");




// console.log("a");


// async function foo (countryCode){
//         try{
//             let data = await fetch(`https://v6.exchangerate-api.com/v6/94a7ac279ee5acf7e02ef60c/latest/${countryCode}`);

//             if(!data.ok){
//                 throw new Error(`api give response an error the argument is ${countryCode}`);
//             }

//             let dataa = await data.json();

//             let {conversion_rates} = dataa;
//             let objIntoArr = Object.keys(conversion_rates);
//             console.log(objIntoArr);
//         }catch(err){
//             console.log(err);
//         }
//     };

//     foo("PKR")


// console.log("b");


 


// let myObject = {
//     name : "M.Ilyas",
//     getName : function (){
//         console.log(this.name);
//     }
// };

// let valueOfMyObject = myObject.getName;

// valueOfMyObject.apply(myObject)



// function foo(){
// fetch(`https://jsonplaceholder.typicode.com/usersr`)
// .then((res) => {
//     if(!res.ok){
//         throw new Error("Error has come");
//     }
//     return res.json();
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(`error ${err}`);
// })};

// foo();


// async function foo2() {
//     let a = await "Muhammad Ilyas";
//     setTimeout(() => {
//         console.log(a);
//     }, 2000)
// }

// foo2();


// let users = [
//   { name: "Ali", age: 22 },
//   { name: "Ahmed", age: 17 },
//   { name: "Sara", age: 25 },
//   { name: "Ayesha", age: 16 }
// ];


// let names =  users.filter((val) => {
//     return val.age > 18 
// }).map((val) => {
//     return val.name.toUpperCase()
// });

// console.log(names);


function foo(param1){
    let parameterSplitedValue = param1.split("");
    
    parameterSplitedValue.map((value) => {
        let counter = 0;
        let filteredValue =  parameterSplitedValue.filter((val , ind) => { 
            
            if(value === val){
                counter += 1;
                if(counter > 1){
                    parameterSplitedValue.splice(ind , 1);
                }
            }
            return value === val;
        })
        console.log(`value ${value} length ${filteredValue.length}`);
        
})
}


foo("javascript");
