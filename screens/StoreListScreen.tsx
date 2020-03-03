import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Stores from '../components/Stores';
import mockData from '../data.json';

export type Store = {
  id: number,
  name: string,
  description: string
}

const StoreListScreen = props => {

  const [storeList, setStoreList] = useState<Store[]>(mockData.data);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (inputText) => {
    setSearchText(inputText)
  }

  const navigateOrderScreen = () => {
    props.navigation.navigate('Order')
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
      <Stores data={filteredStoreList} navigateOrderScreen={navigateOrderScreen}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default StoreListScreen;