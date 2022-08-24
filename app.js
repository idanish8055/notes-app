// const command = process.argv[2];
const yargs = require('yargs')

//customzie yargs version
yargs.version('1.1.0');

//create add command e.g: node app.js add, node app.js add --title="My title" --body="Note body"
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log({'Title' :  argv.title, 'body': argv.body});
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing a task!');
    }
})

//create "list" command

yargs.command({
    'command': 'list',
    'describe': 'Listing notes',
    handler: function(){
        console.log('Listing tasks!');
    }
})

//create "read" command

yargs.command({
    'command': 'read',
    'describe': 'Reading a note',
    handler: function(){
        console.log('Reading a task!');
    }
})

console.log(yargs.argv)