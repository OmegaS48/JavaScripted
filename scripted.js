let divs=document.querySelectorAll(".box");
console.dir(divs);
for (i=0;i<3;i=i+1){
    divs[i].innerHTML="new value "+i;
}