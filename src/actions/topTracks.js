import {
    apiKey,
} from '../consts';

/*
 * action types
 */

export const LOAD_TOP_TRACKS = 'LOAD_TOP_TRACKS';

function fetchTopTracks() {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`);
}

/*
 * action creators
 */

export function loadTopTracks(tracks) {
    return {
        type: LOAD_TOP_TRACKS,
        tracks: tracks,
    }
}

export function getTopTracks() {
    return dispatch => fetchTopTracks().then(
        sauce => sauce.json().then((s) => {
            const {
                tracks: {
                    track: receivedTracks
                }
            } = s;
            dispatch(loadTopTracks(receivedTracks));
        }),
        // error => dispatch(loadTopTracks(['1','2']))
    );
}