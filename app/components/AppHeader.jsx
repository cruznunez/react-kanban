import React from 'react';
import uuid from 'uuid';
import LaneActions from '../actions/LaneActions';
import SettingsButton from './SettingsButton';

export default (props) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div className="app-header">
      <label className="header-btn" onClick={addLane}>Add lane</label>
      <SettingsButton settings={props.settings}/>
    </div>
  );
};