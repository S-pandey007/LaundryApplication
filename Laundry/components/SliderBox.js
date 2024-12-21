import React, { Component } from 'react';
import PropTypes from 'deprecated-react-native-prop-types'; // Importing the deprecated prop types package
import { View, Image } from 'react-native';

class SliderBox extends Component {
  render() {
    const { images, ImageComponentStyle, dotColor, autoplay } = this.props;
    
    // Render your component logic
    return (
      <View style={styles.sliderBoxContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={ImageComponentStyle} />
        ))}
      </View>
    );
  }
}

// Define prop types for your SliderBox component
SliderBox.propTypes = {
  images: PropTypes.array.isRequired, // Ensure that images prop is an array
  sliderBoxHeight: PropTypes.number, // Optional prop for height
  onCurrentImagePressed: PropTypes.func, // Function prop for handling image click
  autoplay: PropTypes.bool, // Optional boolean for autoplay
  circleLoop: PropTypes.bool, // Optional loop prop
  dotColor: PropTypes.string, // Color for dots
  inactiveDotColor: PropTypes.string, // Inactive dot color
  ImageComponentStyle: PropTypes.any, // Style for images (use 'any' to accept any style)
  dotStyle: PropTypes.any, // Style for dots
  imageLoadingColor: PropTypes.string, // Color for loading indicator
  resizeMethod: PropTypes.oneOf(['resize', 'scale']), // Allowed resize methods
  resizeMode: PropTypes.oneOf(['cover', 'contain']), // Allowed resize modes
  paginationBoxStyle: PropTypes.any, // Pagination box style
};

export default SliderBox;
