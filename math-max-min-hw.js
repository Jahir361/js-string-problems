const shakHasina = 97;
const khaledaGia = 80;
const arshad = 98;

if (shakHasina>khaledaGia && shakHasina>arshad){
    console.log('shak  Hasina is the higst ');
}
else if ( khaledaGia>shakHasina && khaledaGia>arshad){
    console.log('khaleda gia is the higst mark');
}
else{
    console.log('arshad is the get high mark');
}

// finde minimum number using if else
if (shakHasina<khaledaGia && shakHasina<arshad){
    console.log('shak  Hasina is the lowest mark ');
}
else if ( khaledaGia<shakHasina && khaledaGia<arshad){
    console.log('khaleda gia is the lowest mark');
}
else{
    console.log('arshad is the get lowest mark');
}

// findeing max number using math.max

function getMaxStudent(number){
    // for( i=0; i<number1.length; i++){
    //     const element = number1[i];
    //     // console.log(element);
    //     let findmax = Math.max(element);
    // }
    // return findmax;
    let findmax = Math.max.apply(null, number);
    return findmax;
    // console.log(number1,number2,number3)
    // console.log(findmax);
}
let studentsNumber = [97,100,89];
let gotMaxNumber = getMaxStudent(studentsNumber);
console.log('Maxmim Number is :',gotMaxNumber);



//mimi numsber
function getMinStudent(number){

    let findmax = Math.min.apply(null, number);
    return findmax;
    
}
let studentsMineNumber = [40,10,89];
let gotMineNumber = getMinStudent(studentsMineNumber);
console.log('Mini Number is :',gotMineNumber);