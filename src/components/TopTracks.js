import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TopTrackItem from './TopTrackItem';
import LinearLoader from './LinearLoader';
import topTracksStyles from '../styles/topTracksStyles';
import imageLoadingController from './imageLoadingController';

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
        addImageHandler,
        loadImageHandler,
        imagesLoaded,
      } = this.props;

      return (
        <div className={classes.topTracksArea}>
          <Typography variant="h5" className={classes.title}>
            TOP TRACKS
          </Typography>
          {
            (!loaded || !imagesLoaded) && (
              <div className={classes.trackList}>
                <LinearLoader wrapperStyle={{padding: '15px'}} />
              </div>
            )
          }
          {
            loaded && (
              <div className={classes.trackList} style={{visibility: imagesLoaded ? 'visible' : 'hidden'}}>
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
                    return (<TopTrackItem 
                      key={i} 
                      addImageHandler={addImageHandler} 
                      loadImageHandler={loadImageHandler}
                      {...itemProps} />);
                  })}
                </List>
              </div>
            )
          }
        </div>
      );
    }
  }
  
  export default withStyles(topTracksStyles)(imageLoadingController(TopTracks));