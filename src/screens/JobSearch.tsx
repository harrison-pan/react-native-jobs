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

interface SearchResultProps {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SearchResult: React.FC<SearchResultProps> = ({
  pageIndex,
  setPageIndex,
}: SearchResultProps): JSX.Element => {
  const params = useSearchParams();
  const router = useRouter();
  const [jobSearchApiConfig, setJobSearchApiConfig] = useState<AxiosRequestConfig | null>(null);

  useMemo(() => {
    setJobSearchApiConfig(
      jSearchRapidApiConfig('search', {
        query: params.query as string,
        page: pageIndex.toString(),
      })
    );
  }, [params.query, pageIndex]);

  const { data, isLoading, error }: SWRDataFetchResult<Job[]> = useSWRDataFetch<Job[]>(
    params.query ? jobSearchApiConfig : null
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <NearbyJobCard
          job={item}
          handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
        />
      )}
      keyExtractor={(item: Job) => (item.job_id ? item.job_id.toString() : '')}
      contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
      ListHeaderComponent={() => (
        <>
          <View style={styles.container}>
            <Text style={styles.searchTitle}>{params.query}</Text>
            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
          </View>
          <View style={styles.loaderContainer}>
            {isLoading ? (
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
            disabled={pageIndex === 1}
            onPress={() => setPageIndex(pageIndex - 1)}
          >
            <Image source={icons.chevronLeft} style={styles.paginationImage} resizeMode="contain" />
          </TouchableOpacity>
          <View style={styles.paginationTextBox}>
            <Text style={styles.paginationText}>{pageIndex}</Text>
          </View>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => setPageIndex(pageIndex + 1)}
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
  );
};

const JobSearch: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
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
      <SearchResult pageIndex={page} setPageIndex={setPage} />
      <View style={styles.jobSearchPreLoadNextPageView}>
        <SearchResult pageIndex={page + 1} setPageIndex={setPage} />
      </View>
    </SafeAreaView>
  );
};

export default JobSearch;
