declare module 'react-native-image-slider-box' {
    import { Component } from 'react';
    import { ViewStyle} from 'react-native';
  
    interface SliderBoxProps {
      images: string[];
      sliderBoxHeight?: number;
      onCurrentImagePressed?: (index: number) => void;
      autoplay?: boolean;
      circleLoop?: boolean;
      dotColor?: string;
      inactiveDotColor?: string;
      ImageComponentStyle?: ViewStyle;
      dotStyle?: ViewStyle;
      imageLoadingColor?: string;
      resizeMethod?: 'resize' | 'scale';
      resizeMode?: 'cover' | 'contain';
      paginationBoxStyle?: ViewStyle;
    }
  
    export default class SliderBox extends Component<SliderBoxProps> {}
  }
  