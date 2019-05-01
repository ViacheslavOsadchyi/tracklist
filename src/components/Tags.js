import React from 'react';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Tags (props) {
    const {
        tags
    } = props;

    return (
        <div>
            <BookmarkIcon style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                color: '#1D1D1D',
            }} />
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
    );
}

export default Tags;