import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils/utils';
import { Job } from '../../../types/custom';

const Company: React.FC<Job> = ({
  employer_logo,
  employer_name,
  job_title,
  job_country,
}: Job): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(employer_logo)
              ? employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{job_title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{employer_name} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode="contain" style={styles.locationImage} />
          <Text style={styles.locationName}>{job_country}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
