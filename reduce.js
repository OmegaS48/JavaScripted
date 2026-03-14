a=[5,6,2,3,4,7,4]
let a2=a.reduce((previous,current)=>{
    return previous>current?previous:current;
});
console.log(a2);