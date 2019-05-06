import React from 'react'
import NotesList from './NotesList'
import NotesDetail from './NotesDetail'

export class NotesApp extends React.Component {
  render() {
    return (
      <div>
        <NotesList />
        <NotesDetail />
      </div>
    )
  }
}

export default NotesApp
