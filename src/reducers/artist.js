import {
    LOAD_ARTIST_INFO,
    CLEAR_ARTIST_MODULE,
} from '../actions/artist';

const initialState = {
    artistInfo: null,
    loaded: false,
};

export default function artist (state = initialState, action) {
    switch (action.type) {
        case CLEAR_ARTIST_MODULE:
            return initialState;
        case LOAD_ARTIST_INFO:
            return {
                ...state,
                artistInfo: action.data,
                loaded: true,
            }
        default:
            return state;
    }
}