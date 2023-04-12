import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';

const Home: React.FC = (): JSX.Element => {
  const router = useRouter();
  const safeAreaViewStyle = { flex: 1, backgroundColor: COLORS.lightWhite };
  const scrollViewStyle = { flex: 1, padding: SIZES.medium };

  return (
    <SafeAreaView style={safeAreaViewStyle}>
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
        <View style={scrollViewStyle}>
          <Welcome></Welcome>
          <PopularJobs></PopularJobs>
          <NearbyJobs></NearbyJobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
