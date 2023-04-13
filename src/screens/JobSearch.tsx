import { Stack, useRouter, useSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AxiosRequestConfig } from 'axios';
import { jSearchRapidApiConfig } from '../apis/rapidApi';
import { NearbyJobCard, ScreenHeaderBtn } from '../components';
import { COLORS, SIZES, icons } from '../constants';
import { SWRDataFetchResult, useSWRDataFetch } from '../hooks/useSWRDataFetch';
import { showErrorToast } from '../modals/toast';
import styles from '../styles/style';
import { Job } from '../types/custom';

const JobSearch: React.FC = (): JSX.Element => {
  const params = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [jobSearchApiConfig, setJobSearchApiConfig] = useState<AxiosRequestConfig | null>(null);

  const initJSapiConfig: AxiosRequestConfig = jSearchRapidApiConfig('search', {
    query: params.query as string,
    page: page.toString(),
  });

  useMemo(() => {
    setJobSearchApiConfig(
      jSearchRapidApiConfig('search', {
        query: params.query as string,
        page: page.toString(),
      })
    );
  }, [params.query, page]);

  const { data, isLoading, isValidating, error }: SWRDataFetchResult<Job[]> = useSWRDataFetch<
    Job[]
  >(params.query ? jobSearchApiConfig : null);

  const handlePagination = (direction: string) => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      setJobSearchApiConfig(initJSapiConfig);
    } else if (direction === 'right') {
      setPage(page + 1);
      setJobSearchApiConfig(initJSapiConfig);
    }
  };

  return (
    <SafeAreaView style={styles.jobSearchSafeAreaView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: '',
        }}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item: Job) => (item?.job_id ? item.job_id.toString() : '')}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{params.query}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={styles.loaderContainer}>
              {isLoading || isValidating ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                error && <>{showErrorToast(error.message)}</>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('left')}
            >
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination('right')}
            >
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
