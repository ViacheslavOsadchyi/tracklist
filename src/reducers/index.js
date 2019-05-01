import { combineReducers } from 'redux';
import topTracks from './topTracks';
import artist from './artist';

const radioApp = combineReducers({
    topTracks,
    artist,
})

export default radioApp;