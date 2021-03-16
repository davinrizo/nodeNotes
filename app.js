const fs = require('fs');
const yargs = require('yargs');
const validator = require('validator');

const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title);
        console.log('body: ' + argv.body)
    }
})

yargs.parse()