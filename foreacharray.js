//forEach is a method.//

a=[4,1,3,3,36,6778,23];
function mod(n){
    if(n%2===0){
        console.log("Even number.");
    }
    else{
        console.log("Odd number.");
    }
}

b=a.forEach(mod);
console.log(b);

//OR//

a.forEach((val,index,a) => {
    console.log(val,index,a)
});