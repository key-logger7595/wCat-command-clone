let input = process.argv.slice(3);
let path = require("path");
const fs = require("fs");

function copyContent(src,dest){

    let content = fs.readFileSync(src,{encoding:'utf-8',flag:'r'});
    let isFile = fs.existsSync(dest)
    console.log(isFile);
    if(!isFile){
         let remaingPath = dest.substring(0, dest.lastIndexOf("/"));
         let destination = path.join(remaingPath,"filenamenew.txt");
         fs.writeFileSync(destination,content);        
    }
    else{
        fs.writeFileSync(dest,content);   
    }
    
}
copyContent(input[1],input[2]);
//node Command-6poc.js wcat -b '/home/rohan/testfile4' '/home/rohan/filename.txt' ;

