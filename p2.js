m=prompt("Enter marks");
if(m>=80 && m<=100){
    console.log("A");
}
if(m>=70 && m<=79){
    console.log("B");
}
if(m>=60 && m<=69){
    console.log("C");
}
if(m>=50 && m<=59){
    console.log("D");
}
if(m>=0 && m<=49){
    console.log("F");
}
if(m<0 && m>100) {
    console.log("Invalid marks");
}