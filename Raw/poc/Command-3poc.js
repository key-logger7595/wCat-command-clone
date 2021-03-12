// this function converts big line break into a singular file 

let input = process.argv.slice(3);
const fs  = require('fs');

function writeFile(src,ans){
    fs.writeFileSync(src,ans);
}

function Convert(src){
    if(fs.existsSync(src)){

      const data = fs.readFileSync(src,{encoding:'utf8',flag:'r'});
      let ans = data.replace(/(\r\n|\n|\r)/gm,"");
      console.log(ans); 
      writeFile(src,ans);
      
  }
  
else{
      console.log("file Does not exist");
}
}
Convert(input[1]);
//'/home/rohan/testFile.txt'
//node Command-3poc.js wcat '/home/rohan/testfile5.txt'
