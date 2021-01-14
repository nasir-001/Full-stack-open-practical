import React from 'react'
import { connect } from 'react-redux'
import { createNote, toggleImportanceOf } from '../reducers/noteReducer'
import notes from '../services/notes'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = (props) => {
  return(
    <ul>
      {props.notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note.id)}
        />
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  if ( state.filter === 'ALL' ) {
    return {
      notes: state.notes
    }
  }
  return {
    notes: (state.filter === 'IMPORTANT')
    ? state.notes.filter(note => note.important)
    : state.notes.filter(note => !note.important)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: value => {
      dispatch(createNote(value))
    }
  }
}

const connectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)

export default connectedNotes