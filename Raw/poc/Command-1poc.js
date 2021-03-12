let input = process.argv.slice(3);
const fs  = require('fs');

function display(src){
    if(fs.existsSync(src)){

      const data = fs.readFileSync(src,{encoding:'utf8',flag:'r'});
      console.log(data); 

  }
else{
      console.log("file Does not exist");
}
}
display(input[0]);
//'/home/rohan/testFile.txt'
