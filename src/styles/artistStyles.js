
const artistStyles = theme => ({
    cardWrapper: {
        [theme.breakpoints.down('xs')]: {
            maxWidth: '300px',
            margin: 'auto'
        }
    },
    card: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
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

export default artistStyles;