n=44;
let a=[];
for (i=1;i<=5;i=i+1){
    a[i-1]=i;
}
let a1=a.reduce((r,c)=>{
    return r+c;
})
let a2=a.reduce((r,c)=>{
    return r*c;
})
console.log(a);
console.log(a1);
console.log(a2);