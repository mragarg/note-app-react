import React from 'react'

function NotesEditor({text, handleChange}) {
    return(
        <textarea value={text} onChange={(e) => {
            handleChange(e.target.value);
        }} />
    );
}

export class NotesDetail extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isEditing: false,
         draftText: props.note.text, 
         id: props.note.id
      }
    }
    

    static getDerivedStateFromProps(props, state) {
        // There is no `this`
        // So, we receive props and state as arguments.


        // Must return an object that describes 
        // any  modifications to state.
        if(props.note.id !== state.id){
            return {
                draftText: props.note.text,
                id: props.note.id
            };
        }
        else {
            return null;
        }
    }

    render() {
        // declares the className and note variables
        // and assigns them to the properties from this.props
        // where the name matches.
        const {className, note} = this.props;
        const {isEditing, draftText} = this.state;
        return (
            <div className={className}>
                {
                    isEditing ? <NotesEditor text={draftText} handleChange={this._changeDraftText}/> : draftText
                }
                <button onClick={this._toggleIsEditing}>Toggle</button>
            </div>
        );
    }

    _changeDraftText = (newText) => {
        this.setState({
            draftText: newText
        })
    }

    _toggleIsEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

}

export default NotesDetail
