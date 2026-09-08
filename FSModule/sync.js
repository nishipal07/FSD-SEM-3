const fs=require('fs');

//Synchronus file write
fs.writeFileSync('secastudent.txt','This is the exp2node','utf8');

console.log('File is written successfully');
const data=fs.readFileSync("secastudent.txt","utf8");
console.log('file content is given as:',data);
const data2=fs.appendFileSync("secastudent.txt",'This is the append note','utf8');
console.log('file content is given as :',data);

// fs.unlinkSync("secastudent.txt");
// console.log('file is deleted successfully');


fs.mkdirSync('sample folder');
console.log('new folder is created');

// //delete folder
// fs.rmdirSync('sample folder');
// console.log('folder is deleted successfully');

if(fs.existsSync('secastudent.txt')){
    console.log('File exists');
} else {
    console.log('File does not exist');
}