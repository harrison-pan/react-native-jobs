import React from 'react';
import { Text, View } from 'react-native';

import styles from './about.style';

interface Props {
  info: string;
}

const About: React.FC<Props> = ({ info }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
