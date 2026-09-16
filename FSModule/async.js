const fs=require('fs');

fs.writeFile(
    'sample.txt','Welcome to Full Stack Development',(err)=>{
        if(err){
            console.log('Error creating file:',err);
            return;
        }
        console.log('File created successfully!');
    }
)
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('File content:');
    console.log(data);
})

fs.appendFile('sample.txt','\nSemester:3',(err)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    else{
    console.log('\n3. File apended successfully!');
}
})
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('File content:');
    console.log(data);
})
//Delete 

fs.writeFile(
    'sample2.txt','Welcome to Full Stack Development',(err)=>{
        if(err){
            console.log('Error creating file:',err);
            return;
        }
        console.log('File  sample2 created successfully!');
    }
)
fs.unlink('sample2.txt',(err)=>{
    if(err){
        console.error('Error deleting file:',err);

    }
    else{
        console.log('\n4. File deleted successfullly!');
    }
})