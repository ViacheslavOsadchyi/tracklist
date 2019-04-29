import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    avatarPic: {
        width: '80px',
        height: '80px',
    }
  });

class TopTrackItem extends Component {
    render() {
      const {
        name,
        artistName,
        artistUrl,
        imgSrc,
        classes,
      } = this.props;

      return (
        <ListItem alignItems="center">
            <ListItemAvatar>
                {
                    imgSrc ? (
                        <Avatar src={imgSrc} className={classes.avatarPic} />
                    ) : (
                        <Avatar className={classes.avatarPic}>
                            <AudiotrackIcon fontSize='large' />
                        </Avatar>
                    )
                }
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <span>
                        by: <Link href={artistUrl}>{artistName}</Link>
                    </span>
                }
            />
            <ListItemSecondaryAction>
              <Tooltip title="Go to artist info page" placement="left">
                <IconButton href={artistUrl} aria-label="Person">
                  <PersonIcon />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
      );
    }
  }
  
  export default withStyles(styles)(TopTrackItem);