import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TopTrackItem from './TopTrackItem';
import LinearLoader from './LinearLoader';

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
            loaded,
            getTracksHandler,
        } = this.props;

        if (!loaded) {
          getTracksHandler();
        }
    }

    render() {
      const {
        tracks,
        loaded,
        classes,
      } = this.props;

      return (
        <div>
          <Typography variant="h5" className={classes.title}>
            TOP TRACKS
          </Typography>
          <div className={classes.trackList}>
            {
              loaded ? (
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
              ) : (<LinearLoader wrapperStyle={{padding: "15px"}} />)
            }
          </div>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(TopTracks);