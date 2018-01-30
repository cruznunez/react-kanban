import React from 'react';
import uuid from 'uuid';
import Note from './Note';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';
import NoteActions from '../actions/NoteActions';


export default ({
  lane,
  notes,
  onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {},
  addNote = (e) => {
    e.stopPropagation();

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: ''
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
  }
}) => (
  <ul className="notes">{notes.map(({id, editing, task}) =>
    <li key={id}>
      <Note className="note" id={id}
        editing={editing}
        onClick={onNoteClick.bind(null, id)}
        onMove={LaneActions.move}>
        <Editable
          className="editable"
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)}/>
          
        <button className="delete" onClick={onDelete.bind(null, id)}>&times;</button>
      </Note>
    </li>
  )}
    <div className="add-note" onClick={addNote}>
      <span>Add note...</span>
    </div>
  </ul>
)