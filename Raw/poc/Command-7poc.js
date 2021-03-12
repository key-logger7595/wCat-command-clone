// append the content of filename1 into filename2
let input = process.argv.slice(3);

let path = require("path");
const fs = require("fs");

function appendContent(src,dest){

    let content = fs.readFileSync(src,{encoding:'utf-8',flag:'r'});
    let isFile = fs.existsSync(dest)
    console.log(isFile);
    if(!isFile){
         let remaingPath = dest.substring(0, dest.lastIndexOf("/"));
         let destination = path.join(remaingPath,"filenamenew.txt");
        fs.writeFile(destination,content, {
        encoding: "utf8", 
        flag: "a+", 
        mode: 0o666
    },cb);        
    }
    else{
        console.log("Am i coming here ");
        fs.writeFile(dest,content, {
            encoding: "utf8", 
            flag: "a+", 
            mode: 0o666
        },cb); 
    }
}
function cb(err){
    if(err){
        console.log("error in appending file");
    }
    else{
        console.log("file appended succesfully");
    }
}
appendContent(input[1],input[2]);
// node Command-7poc.js wcat -b '/home/rohan/testfile4' '/home/rohan/filename.txt' ;

