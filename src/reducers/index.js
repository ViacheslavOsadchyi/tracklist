import { combineReducers } from 'redux';
import topTracks from './topTracks';
import searchedTracks from './searchedTracks';
import artist from './artist';

const radioApp = combineReducers({
    topTracks,
    searchedTracks,
    artist,
})

export default radioApp;