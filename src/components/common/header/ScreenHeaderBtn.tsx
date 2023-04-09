import React from 'react';
import { View, Text } from 'react-native';

// import styles from './screenheader.style';

interface Props {
  iconUrl: string;
  dimension: string;
}

const ScreenHeaderBtn: React.FC<Props> = ({ iconUrl, dimension }): JSX.Element => {
  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  );
};

export default ScreenHeaderBtn;
