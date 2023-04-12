import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../../constants';
import styles from './tabs.style';

interface TabBtnProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const TabButton: React.FC<TabBtnProps> = ({ name, activeTab, onHandleSearchType }: TabBtnProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, name === activeTab && styles.activeTabBtnBgColor]}
      onPress={onHandleSearchType}
    >
      <Text style={[styles.btnText, name === activeTab && styles.activeTabBtnTxtColor]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

interface TabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }: TabProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
