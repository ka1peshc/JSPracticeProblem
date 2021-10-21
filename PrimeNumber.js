let digit = 7;
for(let i=2;i<digit;i++){
    if(digit%i==0){
        console.log(digit+" is not prime number");
        return;
    }
}
console.log(digit+" is prime number");