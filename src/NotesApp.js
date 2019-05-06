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
        return (
            <div className={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                    />
                <NotesDetail className={styles.detail}/>
            </div>
        )
    }

    _selectNote = (id) => {
        // Choose a note to show
        this.setState({
            selectedNote: id
        })
    }
}

export default NotesApp
