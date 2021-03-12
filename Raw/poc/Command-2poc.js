
let input = process.argv.slice(3);

const fs  = require('fs');

function displayConcat(input){
   let ans ;
   for(let i =0;i<input.length;i++){
         ans += display(input[i]);
    }
    console.log(ans);
    
}

function display(src){
   let data;
  if(fs.existsSync(src)){
      
      data = fs.readFileSync(src,{encoding:'utf8',flag:'r'});
    //   console.log(data); 

  }
  else{
      console.log("file Does not exist");
  }
  return data;
}
displayConcat(input);
//'/home/rohan/testFile.txt'
//test command - node Command-2poc.js wcat filename1 filename2 filename3 

