const detailse = 'hello iam hear to gain a best skill to get high pay job and feed my brain.';
// chack is exegeses 

const scarch = 'Job';
const scarchStringLower = scarch.toLowerCase();
const mainStringlower = detailse.toLowerCase();
const doExist = mainStringlower.includes(scarchStringLower);
const doExistOneLain = detailse.toLowerCase().includes(scarch.toLowerCase());
console.log(doExistOneLain);

// ------------------------
// index of 

console.log(detailse.indexOf('gain'));
//
if (detailse.indexOf("skill") !== -1){
    console.log('it is in the string');
}
else{
    console.log('cant find it..');
}
// start with

console.log(detailse.startsWith('hello'));
//end with 

const fileName = "cv.png";
const filetype = "pic.jpg";

console.log(fileName.endsWith("png"));
