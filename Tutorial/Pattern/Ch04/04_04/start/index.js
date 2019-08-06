var conductor = require('./conductor');
var {ExitCommand, CreateCommand} = require('./command');
var {createInterface} = require('readline');
var rl = createInterface({
    input: process.stdin,
    output:process.stdout
});

console.log(`Create <FileName> <text> | exit`);
rl.prompt();

rl.on('on', input =>{
    var [commandText, ...remaining ]= input.split(' ');
    var [fileName, ...fileText] = remaining;
    var text = fileText.join(' ');

    switch(commandText){
        case 'exit':
            conductor.run(new ExitCommand());
            break;
        case 'create':
            conductor.run(new CreateCommand(fileName, text));
            break;
        
            default:
                console.log(`${commandText} command not found`);
    }
    rl.prompt();
});