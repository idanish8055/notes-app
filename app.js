// const command = process.argv[2];
const yargs = require('yargs');
const notes = require('./notes.js');

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
        notes.addNote(argv.title, argv.body);
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

//create "list" command

yargs.command({
    'command': 'list',
    'describe': 'Listing notes',
    handler: function(){
        notes.listNotes();
    }
})

//create "read" command

yargs.command({
    'command': 'read',
    'describe': 'Reading a note',
    builder: {
        title: {
            describe: 'Note title to be fetch',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

console.log(yargs.argv)