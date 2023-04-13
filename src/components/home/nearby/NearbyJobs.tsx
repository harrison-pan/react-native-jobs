import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { AxiosRequestConfig } from 'axios';
import { jSearchRapidApiConfig } from '../../../apis/rapidApi';
import { COLORS } from '../../../constants';
import { SWRDataFetchResult, useSWRDataFetch } from '../../../hooks/useSWRDataFetch';
import { showErrorToast } from '../../../modals/toast';
import { Job } from '../../../types/custom';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';

const jSearchApiConfig: AxiosRequestConfig = jSearchRapidApiConfig('search', {
  query: 'Software Engineer in Wellington, New Zealand',
  num_pages: 1,
});

const NearbyJobs: React.FC = (): JSX.Element => {
  const router = useRouter();

  const { data, isLoading, isValidating, error }: SWRDataFetchResult<Job[]> =
    useSWRDataFetch<Job[]>(jSearchApiConfig);

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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job=${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
