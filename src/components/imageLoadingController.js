import React, { Component } from 'react';

function imageLoadingController(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.imagesExists = 0;
            this.imagesLoaded = 0;
            this.handleAddImage = this.handleAddImage.bind(this);
            this.handleLoadImage = this.handleLoadImage.bind(this);
            this.state = {
                loaded : false,
            }
        }

        handleAddImage() {
            this.imagesExists ++;
        }

        handleLoadImage() {
            this.imagesLoaded ++;

            if (this.imagesLoaded === this.imagesExists) {
                this.setState({
                    loaded: true,
                });
            }
        }

        render() {
            const {
                loaded,
            } = this.state;

            const newProps = {
                ...this.props,
                imagesLoaded: loaded,
                addImageHandler: this.handleAddImage,
                loadImageHandler: this.handleLoadImage,
            }

            return (<WrappedComponent {...newProps} />);
        }
    }
}

export default imageLoadingController;