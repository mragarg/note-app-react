import React from 'react'
import NotesList from './NotesList'
import NotesDetail from './NotesDetail'
import styles from './NotesApp.module.css'

export class NotesApp extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedNote: '1001',
            notes: [   // This will hold an array of objects
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'this is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'this is the third note'
                }
            ]
        }
    }
    

    render() {

        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        
        return (
            <div className={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                />
                <NotesDetail 
                    className={styles.detail}
                    note={theNote}
                    handleSave={this._updateNote}
                />
            </div>
        )
    }

    _selectNote = (id) => {
        // Choose a note to show
        this.setState({
            selectedNote: id
        })
    }

    _updateNote = (idToUpdate, newText) => {
        // We can't simply reassign the item in the array.
        // So we need to create a new array with all the exisiting notes.
        // But, we want to use the newText for the note with id === idToUpdate

        // VERSION 1
        const  updatedNotes1 = this.state.notes.map(note => {
            if(note.id === idToUpdate){
                // return the modified version
                return {
                    ...note,        // Spread out all the existing key-value pairs.
                    text: newText   // Overwrite *just* the text property.
                }
            } else {
                // return a copy of the note as-is
                return {
                    ...note
                };
            }
        });
        this.setState({
            notes: updatedNotes1 // Already a copy
        })

        // ========================================================================================
        // VERSION 2A
        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);

        // ========================================================================================
        // VERSION 2B
        // this.setState({
        //     notes: [
        //         ...updatedNotes2.concat({
        //                 ...theNoteToUpdate,
        //                 text: newText
        //             })
        //     ]
        // });
    }
}

export default NotesApp
