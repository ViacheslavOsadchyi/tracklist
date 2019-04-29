import { connect } from 'react-redux';
import {
    getTopTracks,
} from '../actions/topTracks';
import TopTracks from './TopTracks';

const mapStateToProps = state => {
    const {
        topTracks: {
            tracks,
            loaded,
        }
    } = state;

    return {
        tracks,
        loaded,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getTracksHandler: () => {
            dispatch(getTopTracks());
        }
    }
}

const TopTracksX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopTracks);

export default TopTracksX;