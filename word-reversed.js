

function wordReversed(text){
    const word =text.split(' ');
    // let wordRe ='';
    let newArray = [];
    for(i=word.length-1;i>=0;i--){
        const element = word[i];
        // wordRe= wordRe + element;
        newArray.push(element);
        // console.log(newArray);
    }
    const arrayJoin = newArray.join(' ');
    return arrayJoin;
    

}




const myString = 'Hello iam a good boy';
const result = wordReversed(myString);
console.log(result);
