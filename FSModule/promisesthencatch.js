const fs=require("fs").promises;

async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}

writeFile();

async function readFile(){
    try{
        const data= await fs.readFile("promise.txt","utf8");
        console.log("File Content:");
        console.log(data);
    }catch(error){
        console.log("Error:",error);
    }
}

readFile();

async function renamefile(){
    try{
        await fs.rename("promise.txt","renamed_new.txt");
        console.log("File renamed successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}

renamefile();
async function writeFile(){
    try{
        await fs.writeFile("promise3.txt","Hello Students!");
        console.log("File created and data written successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}

writeFile();
async function unlinkfile(){
    try{
        await fs.unlink("promise3.txt");
        console.log("File deleted successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}

unlinkfile();
async function appendFile(){ 
    try{
        await fs.appendFile("renamed_new.txt","This is the append note");
        console.log("Data appended successfully.");
    }catch(error){
        console.log("Error:",error);
    }
}

appendFile();