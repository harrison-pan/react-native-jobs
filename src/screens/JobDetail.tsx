import { Stack, useRouter, useSearchParams } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { AxiosRequestConfig } from 'axios';
import { jSearchRapidApiConfig } from '../apis/rapidApi';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../components';
import { COLORS, SIZES, icons } from '../constants';
import { SWRDataFetchResult, useSWRDataFetch } from '../hooks/useSWRDataFetch';
import { showErrorToast } from '../modals/toast';
import { Job } from '../types/custom';
import styles from '../styles/style';

let jobDetailApiConfig: AxiosRequestConfig;

const tabs: string[] = ['About', 'Qualifications', 'Responsibilities'];

const JobDetail: React.FC = (): JSX.Element => {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  useMemo(() => {
    jobDetailApiConfig = jSearchRapidApiConfig('job-details', {
      job_id: params.id as string,
    });
  }, [params.id]);

  const { data, isLoading, isValidating, error }: SWRDataFetchResult<Job[]> = useSWRDataFetch<
    Job[]
  >(params.id ? jobDetailApiConfig : null);

  const onRefresh = () => {
    throw new Error('Function not implemented.');
  };

  const displayTabContent = (): JSX.Element | null => {
    switch (activeTab) {
      case tabs[0]:
        return <JobAbout info={data[0].job_description ?? 'No data provided'} />;

      case tabs[1]:
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case tabs[2]:
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.jobDetailsSafeAreaView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => {
                throw new Error('Function not implemented.');
              }}
            />
          ),
          headerTitle: '',
        }}
      ></Stack.Screen>

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading || isValidating ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <>{showErrorToast(error.message)}</>
          ) : !data || data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={styles.jobDetailsScrollView}>
              <Company
                employer_logo={data[0].employer_logo}
                employer_name={data[0].employer_name}
                job_title={data[0].job_title}
                job_country={data[0].job_country}
              />

              <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetail;
