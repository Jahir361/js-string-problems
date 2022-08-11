function arrayHight (number){
    let hight = number[0];
    for(let i=0; i<number.length;i++){
    let index = i ;
    let element = number[index];
    if(element>hight){
        hight=element;
    }
    }
    return hight;
}

const numberOfParticpirnts =[157,134,188];
const result = arrayHight(numberOfParticpirnts);
console.log(result);