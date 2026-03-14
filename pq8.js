a=[5,15,25,35,45];
b=[0,0,0,0,0];
a.forEach((value)=>{
    console.log(value**10);
});

let sq = (n)=>{
    console.log(n**2);
};
//reversed array.//
a.forEach(sq);
for(j=0;j<5;j=j+1){
    b[j]=a[4-j];
}
var a=b.map((value)=>{
    return value;
})
console.log(a);