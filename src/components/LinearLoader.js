import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    paper: {
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

export default function LinearLoader (props) {
    return (
        <div style={props.wrapperStyle}>
            <Typography component="p">
                Loading ...
            </Typography>
            <br />
            <LinearProgress />
        </div>
    );
}