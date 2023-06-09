import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageStyle } from 'react-native';

import styles from './popularjobcard.style';
import { checkImageURL } from '../../../../utils/utils';
import { Job } from '../../../../types/custom';

interface Props {
  item: Job;
  selectedJob: string | undefined;
  handleCardPress: (item: Job) => void;
}

function PopularJobCard({ item, selectedJob, handleCardPress }: Props): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.container, selectedJob === item.job_id && styles.selectedJob]}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={[styles.logoContainer, selectedJob === item.job_id && styles.selectedLogoStyle]}
      >
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage as ImageStyle}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={[styles.jobName, selectedJob === item.job_id && styles.selectedJobNameStyle]}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularJobCard;
