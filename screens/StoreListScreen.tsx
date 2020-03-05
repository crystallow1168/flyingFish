import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Stores from '../components/Stores';
import mockData from '../data.json';

export type Store = {
  id: number,
  name: string,
  description: string,
  menu: {
    fixed: String[],
  }
}

const StoreListScreen = props => {

  const [storeList, setStoreList] = useState<Store[]>(mockData.data);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (inputText: string) => {
    setSearchText(inputText);
  }

  const handleClearSearch = () => {
    setSearchText('');
  }

  const searchTextLC = searchText.toLowerCase();
  const filteredStoreList = searchText.length > 0 ? storeList.filter(store => store.name.toLowerCase().includes(searchTextLC)) : storeList;

  return (
    <ScrollView style={styles.screen}>
      <View>
        <SearchBar
          placeholder="Search Here..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <Stores data={filteredStoreList} navigation={props.navigation} handleClearSearch={handleClearSearch} />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 40
  },
});

export default StoreListScreen;