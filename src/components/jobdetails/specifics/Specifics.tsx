import React from 'react';
import { Text, View } from 'react-native';

import styles from './specifics.style';

interface Props {
  title: string;
  points: string[];
}

const Specifics: React.FC<Props> = ({ title, points }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
