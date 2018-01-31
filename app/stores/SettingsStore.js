import SettingsActions from '../actions/SettingsActions';

export default class SettingsStore {
  constructor() {
    this.bindActions(SettingsActions);
    this.settings = {
      theme: 'blue',
      fontSize: 16
    };
  }
  
  updateFontSize(fontSize) {
    if (fontSize < 8) {
      fontSize = 8;
    } else if (fontSize > 32) {
      fontSize = 32;
    }
    this.settings.fontSize = fontSize;
  }
  
  updateTheme(theme) {
    this.settings.theme = theme;
  }
}