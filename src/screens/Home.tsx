import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';
import { COLORS, icons, images } from '../constants';
import styles from '../styles/style';

const Home: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

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
                // TODO: add menu button functionality
              }}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profileImage}
              dimension="100%"
              handlePress={() => {
                // TODO: add profile image button functionality
              }}
            />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeScrollView}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => searchTerm && router.push(`/search/${searchTerm}`)}
          ></Welcome>
          <PopularJobs></PopularJobs>
          <NearbyJobs></NearbyJobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
