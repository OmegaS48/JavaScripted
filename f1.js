n=prompt("Enter number of numbers to be printed from the Fibonacci series.")
function adder(n){
    if(n<2){
        return 1;
    }
    else{
        return adder(n-1)+adder(n-2);
    }
}
for(i=0;i<n;i=i+1){
console.log(adder(i));
}