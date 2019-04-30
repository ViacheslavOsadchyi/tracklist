import {
    apiKey,
} from '../consts';

/*
 * action types
 */

export const LOAD_ARTIST_INFO = 'LOAD_ARTIST_INFO';
export const CLEAR_ARTIST_MODULE = 'CLEAR_ARTIST_MODULE';

function fetchArtistInfo(artist) {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${apiKey}&format=json`);
}

/*
 * action creators
 */

export function loadArtistInfo(data) {
    return {
        type: LOAD_ARTIST_INFO,
        data,
    }
}

export function clearArtistModule() {
    return {
        type: CLEAR_ARTIST_MODULE
    }
}

export function getArtistInfo(artist) {
    return dispatch => fetchArtistInfo(artist).then(
        sauce => sauce.json().then((s) => {          
            dispatch(loadArtistInfo(s.artist));
        }),
        // error => dispatch(loadTopTracks(['1','2']))
    );
}