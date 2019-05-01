import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearLoader from './LinearLoader';
import MUILink from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Tags from './Tags';
import imageLoadingController from './imageLoadingController';
import artistStyles from '../styles/artistStyles';

class Artist extends Component {
    componentDidMount() {
        const {
            getArtistInfoHandler,
            artistUrlName,
            addImageHandler,
        } = this.props;
        getArtistInfoHandler(artistUrlName);
        window.scrollTo(0,0);
        addImageHandler();
    }

    componentWillUnmount() {
        const {
            clearArtistModule,
        } = this.props;

        clearArtistModule();
    }

    renderCard() {
        const {
            artistInfo: {
                name,
                bio: {
                    summary: bioSummary,
                },
                image,
                tags,
            },
            classes,
            loadImageHandler,
            imagesLoaded,
        } = this.props;

        return (
            <Card className={classes.card} style={{visibility : imagesLoaded ? 'visible' : 'hidden'}}>
                <div className={classes.media}>
                    <img
                        src={image[4]['#text']}
                        style={{width: '300px', height: '300px', display: 'block'}}
                        onLoad={loadImageHandler}
                        alt="artistPic"
                    />
                </div>
                <div className={classes.content}>
                    <CardContent>
                        <div className={classes.cardContentHeader}>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                {name}
                            </Typography>
                            <div className={classes.breadCrumbs}>
                                <MUILink component={Link} to='/'>Home</MUILink>
                                <span dangerouslySetInnerHTML={{ __html: ` &#187 ${name}` }} />
                            </div>
                        </div>
                        <Typography component="p" dangerouslySetInnerHTML={{ __html: bioSummary }} />
                    </CardContent>
                    <CardActions>
                        {tags && tags.tag && <Tags tags={tags.tag} />}
                    </CardActions>
                </div>
            </Card>
        );
    }

    render() {
        const {
            loaded,
            imagesLoaded,
            classes,
        } = this.props;

      return (
        <div className={classes.cardWrapper}>
            {
                (!loaded || !imagesLoaded) && (
                    <Paper>
                        <LinearLoader wrapperStyle={{padding: '15px'}} />
                    </Paper>               
                )
            }
            {
                loaded && this.renderCard()
            }
        </div>
      )
    }
  }
  
  export default withStyles(artistStyles)(imageLoadingController(Artist));