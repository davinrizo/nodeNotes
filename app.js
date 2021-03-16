const fs = require('fs');
const yargs = require('yargs');
const validator = require('validator');

const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: () => {
        console.log('Toma hawk')
    }
})

console.log(yargs.argv)