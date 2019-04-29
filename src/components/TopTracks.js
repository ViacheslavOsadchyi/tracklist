import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopTrackItem from './TopTrackItem';

const styles = theme => ({
  trackList: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '600px'
  },
  title: {
    margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
  },
  spinnerWrapper: {
    padding: '10px',
    textAlign: 'center'
  }
});

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
        classes,
      } = this.props;

      return (
        <div>
          <Typography variant="h6" className={classes.title}>
            Top Tracks
          </Typography>
          <div className={classes.trackList}>
            {
              !loaded && (
                <div className={classes.spinnerWrapper}>
                  <CircularProgress className={classes.spinner} />
                </div>
              )
            }
            {
              loaded && (
                <List>
                  {tracks.map((track, i) => {
                    const {
                      name,
                      image,
                      artist: {
                        name: artistName,
                        url: artistUrl,
                      }
                    } = track;
                    const imgSrc = image && image[2] && image[2]['#text'] ? image[2]['#text'] : null;
                    const itemProps = {
                      name,
                      artistName,
                      artistUrl,
                      imgSrc,
                    };
                    return (<TopTrackItem key={i} {...itemProps} />);
                  })}
                </List>
              )
            }
          </div>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(TopTracks);