let input = process.argv.slice(3);

let isInclude = input.includes('>');
let isInclude2 = input.includes('>>');


if((input[0]=='-s'||input[0]=='-n'||input[0]=='-b') && (!isInclude)){
   //3 ifs and three seprate function 
   if(input[0]=='-s'){
     //wcat -s filename function call here 
     console.log("wcat -s filename ");
   }
   else if(input[0]=='-n'){
     // wcat -n filename fucntion call here 
     console.log(" wcat -n filename");
   }
   else{
     // wcat -b filename function call here 
     console.log("wcat -b filename ");
   }
}
else if(input[0]=='-s' && isInclude){
    //wcat -s filename > filename2
    console.log("wcat -s filename > filename2");

}
else if(isInclude){

    //wcat filename -> filename2
    console.log("wcat filename -> filename2");
}
else if(isInclude2){
  //wcat filename >> filename2

  console.log("wcat filename >> filename2");
}
else if((input[0]!='-s'||input[0]!='-n'||input[0]!='-b') && (!isInclude && !isInclude2  && input.length > 1)){
    // wcat filename1 ,filename2,filename 3
    //display all Content in the given form 
    console.log("wcat filename1 ,filename2,filename 3");
}
else{
    console.log("wcat filename");
    //displayContent function

}
console.log(input);
// single filename input wil be returnded as ["filename"]
