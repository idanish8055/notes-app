const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.filter(function(note){
        return title === note.title; 
    });

    if(duplicateNote.length === 0){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen("Note added!"));
    }
    else{
        console.log(chalk.bgRed("Note already taken"));
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) => {
        return note.title !== title
    });
    if(notes.length === updatedNotes.length){
        console.log(chalk.bgRed("No note found"));
    }
    else{
        console.log(chalk.bgGreen("Note removed!"));
    }
    console.log(updatedNotes);
    saveNotes(updatedNotes);
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse("Your notes:-"));

    notes.forEach((note)=>{
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);
    console.log(duplicateNote, title);
    if(duplicateNote){
        console.log(chalk.inverse(duplicateNote.title));
        console.log(duplicateNote.body);
    }
    else{
        console.log(chalk.bgRed("Note not found"));
    }
}

module.exports = {getNotes, addNote, removeNote, listNotes, readNote};