
const topTracksStyles = theme => ({
    topTracksArea: {
        maxWidth: '600px',
        margin: 'auto',
    },
    trackList: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
    },
    spinnerWrapper: {
        padding: '10px',
        textAlign: 'center'
    }
});

export default topTracksStyles;