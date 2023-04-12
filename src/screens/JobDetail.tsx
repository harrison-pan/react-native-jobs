import { Stack, useRouter, useSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
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
import { Company, JobFooter, JobTabs, ScreenHeaderBtn } from '../components';
import TabContent from '../components/jobdetails/tab-contents/TabContent';
import { COLORS, icons } from '../constants';
import { SWRDataFetchResult, useSWRDataFetch } from '../hooks/useSWRDataFetch';
import { showErrorToast } from '../modals/toast';
import styles from '../styles/style';
import { Job } from '../types/custom';

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

              <TabContent activeTab={activeTab} job={data[0]} />
            </View>
          )}
        </ScrollView>
        <JobFooter
          job_apply_link={
            data && data[0]?.job_apply_link
              ? data[0].job_apply_link
              : 'https://www.linkedin.com/jobs/'
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetail;
