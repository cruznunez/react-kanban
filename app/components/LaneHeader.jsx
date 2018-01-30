import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}), {
  NoteActions,
  LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
  const activateLaneEdit = () => {
    LaneActions.update({
      id: lane.id,
      editing: true
    });
  };
  const editName = name => {
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    });
  };  
  const deleteLane = e => {
    // Avoid bubbling to edit
    e.stopPropagation();
    
    LaneActions.delete(lane.id);
  };

  return (
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <Editable className="lane-name" editing={lane.editing} value={lane.name} onEdit={editName} />
      <div className="lane-delete">
        <button onClick={deleteLane}>&times;</button>
      </div>
    </div>
  );
})