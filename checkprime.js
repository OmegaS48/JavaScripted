n=prompt("Enter number.");
for(i=2;i<n;i=i+1){
    if(n%i===0){
        console.log("Not prime");
        break;
    }
    else{
        console.log("Prime.");
        break;
    }
}