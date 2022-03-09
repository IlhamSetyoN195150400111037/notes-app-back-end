const { addNoteHandler } = require('./handler');
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const notes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        handler: getAllNotesHandler,
    },
];
 
module.exports = notes;