import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';
import styles from '../styles/style';

const Home: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.homeSafeAreaView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {
                throw new Error('Function not implemented.');
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profileImage}
              dimension="100%"
              handlePress={() => {
                throw new Error('Function not implemented.');
              }}
            />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeScrollView}>
          <Welcome></Welcome>
          <PopularJobs></PopularJobs>
          <NearbyJobs></NearbyJobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
