

let a = false;

a ||= true;

console.log(a);


let b = false;

b ??= 'ilyas';

console.log(b);

let endOperator = null;

endOperator &&= "endOperatorwalevariablemaikxhnhtha";
console.log(endOperator);


let spreadOp1 = ["a" , "b" , "c" , "d"];
let spreadOp2 = ["e" , "f"];

let c = [...spreadOp1 , ...spreadOp2];
console.log(c);


let sp1 = {
    custName : "Muhammad Ilyas",
    mobileName : "03102085846",
    designation : "Senior Oracle Developer",
    hobby : ["Development" , "cricket" , "clothing" , "shopping"],
    persnal : {
        mobile : "google pixel",
        bike : "Unique 70",
        laptop : "Lenovo"
    }
};

let sp2 = {
    custName : "Muhammad Hussain",
    mobileName : "03198272702",
    designation : "Angular develop",
    ...sp1,
};

console.log(sp2);


let {custName : meraName , hobby , persnal} = sp1;

console.log(meraName);
console.log(hobby);


let ilyas = ["a" , "b" , "c" , "d"];
let hussain = ["f" , "g"]
let [...i] = ilyas;
console.log(...i);



let vari = "ilyas";
console.log([...vari , " " , "s"]);



let dobarni = ["meri" , "cast" , "gori" , "hai" , "lkn" , "sab" , "hame" , "dobani" , "kehte" , "hai"];

let [firstword , secondword , ...iskbadsare] = dobarni;

console.log(iskbadsare);


let myObj = {
    a : "mera",
    b : function d(){
        console.log(this.a)
    }
}


let myObj1 = {
    c : "kisiorka",
}

myObj1.b = myObj.b;

console.log(myObj1);
console.log(myObj1.b());


