s=prompt("Enter the word.");
l=s.length;
v=0;
const voweler=(s)=>{
    for(i=0;i<l;i=i+1){
        if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
            v=v+1;
        }
    }
    console.log(v);
}
console.log("Number of vowels:");
voweler(s);