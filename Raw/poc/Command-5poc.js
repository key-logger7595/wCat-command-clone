//wcat -n filename => give numbering to all the lines 
let input = process.argv.slice(3);

const fs = require('fs');

function writeChanges(src,ans){
    fs.writeFileSync(src,ans);
    console.log("After writing changes");
}

function numbering(src){

    let data = fs.readFileSync(src,{encoding:'utf8',flag:'r'});
    // console.log(data);
    let temp = data.toString().split("\n");
    // console.log(temp);  
    let k=0;
    for(let i=0;i<temp.length;i++){
        if(temp[i]!=''){
            let numberLine = `${k+1}-`;
            let val = temp[i];
            let ans = numberLine.concat(val);
            // console.log(ans);
            temp[i] = ans;
            k++;
        }
    }
    // console.log(temp);
    //joining the line of all the string in an array
    let finalAns = temp.join("\n");
    // console.log(finalAns);

    writeChanges(src,finalAns);

}

numbering(input[1]);

// node Command-4poc.js wcat -b filename
// node Command-5poc.js wcat -b '/home/rohan/testfile6.txt'
