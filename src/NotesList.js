import React from 'react'
import styles from './NotesList.module.css';

function NotesListItem({text, handleClick, id}) {
    return (
        <li>
            <a 
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("You have clicked");
                    handleClick(id);
                }}
                >
                    {text}
            </a>
        </li>
    );
}

export default function NotesList({notes, className, handleSelection}) {
  
    // const items = notes.map(({title}) => <NotesListItem text={title} handleClick={handleSelection}/>)
    const items = notes.map(note => <NotesListItem id={note.id} text={note.title} handleClick={handleSelection}/>)
  
    return (
    <ul className={`${styles.list} ${className}`}>
      {items}
    </ul>
  );

}