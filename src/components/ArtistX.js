import { connect } from 'react-redux';
import {
    getArtistInfo,
    clearArtistModule,
} from '../actions/artist';
import Artist from './Artist';

const mapStateToProps = (state, ownProps) => {
    const {
        artist: {
            artistInfo,
            loaded,
        }
    } = state;
    const {
        name: artistUrlName,
    } = ownProps.match.params;

    return {
        artistUrlName,
        artistInfo,
        loaded,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getArtistInfoHandler: (artist) => {
            dispatch(getArtistInfo(artist));
        },
        clearArtistModule: () => {dispatch(clearArtistModule())}
    }
}

const ArtistX = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artist);

export default ArtistX;