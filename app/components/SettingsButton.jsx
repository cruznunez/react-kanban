import React from 'react';
import SettingsActions from '../actions/SettingsActions';

export default (props) => {
  const setFontSize = (fontSize) => SettingsActions.updateFontSize(fontSize);
  const setTheme = (e) => SettingsActions.updateTheme(e);
  
  let open = props.settings.open;
  let fontSize = props.settings.fontSize;
  
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray'];
  
  return(
    <div id="settings" className={open ? 'open' : ''}>
      <label className="header-btn" htmlFor="settings-checkbox">Settings</label>
      <input type="checkbox" id="settings-checkbox" />
      
      <div className="settings-body">
        <h3>Theme</h3>
        <div className="flex themes">
          { colors.map( (color) => 
            <button 
              className={`flex-grow ${color}-btn`} 
              onClick={setTheme.bind(null, color)}>
              {color[0].toUpperCase()}
            </button> 
          ) }
        </div>
        <h3>Font Size</h3>
        <div className="flex justify-around" style={{padding: '0 30px'}}>
          <button className="font-btn" onClick={setFontSize.bind(null, fontSize - 1)}>−</button>
          {fontSize}px
          <button className="font-btn" onClick={setFontSize.bind(null, fontSize + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};