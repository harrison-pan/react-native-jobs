import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import { useSWRDataFetch } from '../../../hooks/useSWRDataFetch';
import { showErrorToast } from '../../../modals/toast';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
import { Job } from '../../../types/custom';

const PopularJobs: React.FC = (): JSX.Element => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: 1,
  // });

  const { data, isLoading, isValidating, error } = useSWRDataFetch(
    'https://jsearch.p.rapidapi.com/search',
    {
      query: 'React developer',
      num_pages: 1,
    }
  );

  const [selectedJob, setSelectedJob] = useState<string | undefined>();

  const handleCardPress = (item: Job) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item?.job_id);
  };

  const jobs = data as Job[];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item: Job) => (item?.job_id ? item.job_id.toString() : '')}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
