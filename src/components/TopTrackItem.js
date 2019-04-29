import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';

class TopTrackItem extends Component {
    render() {
      const {
        name,
        artistName,
        artistUrl,
        imgSrc,
      } = this.props;

      return (
        <GridListTile>
            <img src={imgSrc} />
            <GridListTileBar
                title={name}
                subtitle={<span>by: <Link href={artistUrl} color="inherit">{artistName}</Link></span>}
                actionIcon={
                    <Tooltip title="Go to Artist info page" aria-label="artist_info">
                        <IconButton href={artistUrl}>
                            <PersonIcon style={{color: 'rgba(255,255,255,0.6)'}} />
                        </IconButton>
                    </Tooltip>
                }
            />
        </GridListTile>
      );
    }
  }
  
  export default TopTrackItem;