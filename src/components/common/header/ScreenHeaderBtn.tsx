import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

import { styles, createBtnImgStyle } from './screenheader.style';

interface Props {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: () => void;
}

const ScreenHeaderBtn: React.FC<Props> = ({ iconUrl, dimension, handlePress }): JSX.Element => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[styles.btnImg, createBtnImgStyle(dimension)]}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
