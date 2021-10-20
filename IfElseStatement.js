//PROBLEM 1
// reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
//problem 1 block scope
{
    let num1 = 80;
    let num2 = 30;
    let num3 = 70;
    if(num1 > num2){
        if(num1 > num3){
            console.log("num1 is maximum")
        }
        else{
            console.log("num2 is maximum");
        }
        if(num3 < num2){
            console.log("num 3 is minimum")
        }
        else{
            console.log("num2 is minimum");
        }
    }
    else{
        if(num2 > num3){
            console.log("num2 is maximum");
        }
        else{
            console.log("num3 is maximum");
        }
        if(num3 < num1){
            console.log("num 3 is minimum")
        }
        else{
            console.log("num1 is minimum");
        }
    }
}