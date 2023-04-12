import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';

import { icons } from '../../../constants';
import { Job } from '../../../types/custom';
import styles from './footer.style';

const Footer: React.FC<Job> = ({ job_apply_link }: Job): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image source={icons.heartOutline} resizeMode="contain" style={styles.likeBtnImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(job_apply_link as string)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
