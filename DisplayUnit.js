let digit = 203;
switch(digit){
    case digit <= 9:
        console.log("Unit");
        break;
    case digit <=99:
        console.log("Tens's");
        break;
    case digit <=999:
        console.log("Hundred's");
        break;
    case digit <=9999:
        console.log("Thousand's");
        break;
    default:
        console.log("undefiend");
        break;
}
