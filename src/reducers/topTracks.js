import {LOAD_TOP_TRACKS} from '../actions/topTracks';

const initialState = {
    tracks: [],
    loaded: false,
};

export default function topTracks (state = initialState, action) {
    switch (action.type) {
        case LOAD_TOP_TRACKS:
            console.log(action.tracks);
            return {
                ...state,
                tracks: action.tracks,
                loaded: true,
            }
        default:
            return state;
    }
}