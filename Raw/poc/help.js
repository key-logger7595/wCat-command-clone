function helper(){
    return (`Command-1 node mycli.js wcat filename
             Command-2node mycli.js wcat filename ,filename2,filename3 ...
             Command-3node mycli.js wcat -s filename
             Command-4node mycli.js wcat -n filename
             Command-5node mycli.js wcat -b filename
             Command-6node mycli.js wcat filename '>' filename2 
             Command-7node mycli.js wcat filename '>>' filename2 

             `);
}