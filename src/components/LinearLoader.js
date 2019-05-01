import React from 'react';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

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