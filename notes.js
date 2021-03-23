const fs = require('fs')

getNotes = () => {
    return 'Your notes';
}

addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log("Note title taken!")
    }



}

listNotes = () => {
    const notes = loadNotes()

    console.log('Your notes')

    notes.forEach(note => console.log(note.title));
}

saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []

    }
}

removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log("note removed!")
    } else {
        console.log('No note found!')
    }

}

readNotes = (title) => {
    const notes = loadNotes()
    const theNote = notes.find(note => note.title === title)

    if (theNote) {
        console.log(theNote.body)
    } else {
        console.log('note not found!')
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}