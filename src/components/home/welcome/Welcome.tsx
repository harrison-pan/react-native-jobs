import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, ImageStyle, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SIZES, icons } from '../../../constants';
import styles from './welcome.style';

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  handleClick,
}: Props): JSX.Element => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Harrison</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage as ImageStyle}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tab, activeJobType === item && styles.activeTabStyle]}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${searchTerm} ${item}`);
              }}
            >
              <Text style={[styles.tabText, activeJobType === item && styles.activeTabTextStyle]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
