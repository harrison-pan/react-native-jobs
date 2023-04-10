import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import { useSWRDataFetch } from '../../../hooks/useSWRDataFetch';
import { showErrorToast } from '../../../modals/toast';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';

const PopularJobs: React.FC = (): JSX.Element => {
  const router = useRouter();

  // const { data, isLoading, error } = useFetch('search', {
  //   query: 'React developer',
  //   num_pages: 1,
  // });

  const { data, isLoading, isValidating, error } = useSWRDataFetch(
    'https://jsearch.p.rapidapi.com/searc',
    {
      query: 'UI developer',
      num_pages: 1,
    }
  );

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
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
