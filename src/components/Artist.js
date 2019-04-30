import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearLoader from './LinearLoader';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MUILink from '@material-ui/core/Link';
import {Link} from 'react-router-dom';

const styles = theme => ({
    card: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '300px',
            flexDirection: 'column'
        }
    },
    tagIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    media: {
        flex: "1 0 auto"
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            marginBottom: '15px',
        }
    },
    breadCrumbs: {
        [theme.breakpoints.down('xs')]: {
            order: '0',
            marginBottom: '10px',
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            order: '1',
        }        
    }
});

class Artist extends Component {
    componentDidMount() {
        const {
            getArtistInfoHandler,
            artistUrlName,
        } = this.props;
        getArtistInfoHandler(artistUrlName);
        window.scrollTo(0,0);
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
            },
            classes,
        } = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.media}>
                    <img
                        src={image[4]['#text']}
                        style={{width: '300px', height: '300px', display: 'block'}}
                        onLoad={() => {
                            console.log('Iamge Loaded!!!');
                        }}
                        alt
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
                        {this.renderTags()}
                    </CardActions>
                </div>
            </Card>
        );
    }

    renderTags() {
        const {
            artistInfo,
            classes,
        } = this.props;

        const tags = artistInfo && artistInfo.tags &&
            artistInfo.tags.tag ? this.props.artistInfo.tags.tag : [];

        return (
            <div className="tags">
                <BookmarkIcon className={classes.tagIcon} />
                {tags.map((tag) => {
                    const {
                        name,
                        url
                    } = tag;

                    return (
                        <Button key={name} href={url}>
                            {name}
                        </Button>
                    );
                })}
            </div>
        )
    }

    render() {
        const {
            loaded,
        } = this.props;

      return (
        loaded ? this.renderCard() : (
            <Paper>
                <LinearLoader wrapperStyle={{padding: '15px'}} />
            </Paper>
          )
      );
    }
  }
  
  export default withStyles(styles)(Artist);