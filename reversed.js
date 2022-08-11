function reversedString(text){
    // for(i=0; i<text.length;i++);
    let reversed = '';
    for(i=text.length-1; i>=0;i--){
        const element = text[i];
        reversed = reversed + element;
        // console.log(element,reversed);
    }
    return reversed;
}
const ourText = 'Hello iam a good boy';
// const nerws = [4,3,8,2,9];
const result = reversedString(ourText);
console.log(result);