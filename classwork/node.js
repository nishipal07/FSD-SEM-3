const EventEmitter=require("events");
const myEmitter= new EventEmitter();
myEmitter.on('greet',(name)=>{console.log(`hello, ${name}! welcome to node.js`);});
myEmitter.on('exit',()=>{console.log("you have exited the application");});
myEmitter.emit("greet","2nd year");
myEmitter.emit("exit");

8