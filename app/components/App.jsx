import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import AppHeader from './AppHeader';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import SettingsActions from '../actions/SettingsActions';

const App = ({LaneActions, lanes, SettingsActions, settings}) => {
  return (
    <div className={`app ${settings.theme}`} style={{fontSize: settings.fontSize}}>
      <AppHeader settings={settings}/>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    ({lanes, settings}) => ({lanes, settings}),
    {LaneActions, SettingsActions}
  )
)(App);