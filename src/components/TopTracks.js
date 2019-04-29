import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import TopTrackItem from './TopTrackItem';

class TopTracks extends Component {
    componentDidMount() {
        const {
            getTracksHandler,
        } = this.props;
        getTracksHandler();
    }

    render() {
      const {
        tracks,
        loaded,
      } = this.props;

      return (
        <GridList cellHeight={100}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="h1">Top Tracks</ListSubheader>
          </GridListTile>
          {tracks.map((track, i) => {
            const {
              mbid,
              name,
              image,
              artist: {
                name: artistName,
                url: artistUrl,
              }
            } = track;
            const imgSrc = image[2]['\#text'];
            const itemProps = {
              name,
              artistName,
              artistUrl,
              imgSrc,
            };
            return (<TopTrackItem key={mbid} {...itemProps} />);
          })}
        </GridList>
      );
    }
  }
  
  export default TopTracks;