import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants';
import { useSWRDataFetch } from '../../../hooks/useSWRDataFetch';
import { showErrorToast } from '../../../modals/toast';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import { Job } from '../../../types/custom';

const NearbyJobs: React.FC = (): JSX.Element => {
  const router = useRouter();

  const { data, isLoading, isValidating, error } = useSWRDataFetch(
    'https://jsearch.p.rapidapi.com/search',
    {
      query: 'React developer',
      num_pages: 1,
    }
  );

  const jobs = data as Job[];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading || isValidating ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <>{showErrorToast(error.message)}</>
        ) : (
          jobs?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() => router.push(`/job-detail/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
