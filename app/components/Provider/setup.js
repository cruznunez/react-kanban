import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';
import SettingsStore from '../../stores/SettingsStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);
  alt.addStore('SettingsStore', SettingsStore);
  
  // you can also pass in sessionStorage vs localStorage
  persist(alt, storage(localStorage), 'app');
}