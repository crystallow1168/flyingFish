import React from 'react';
import { View } from 'react-native';
import Store from '../components/Store';
import { Store as StoreType } from '../screens/StoreListScreen';

type Props = {
  data: StoreType[],
  handleClearSearch: () => void,
  navigation: any
}

const Stores = (props: Props) => {

  const { data, handleClearSearch } = props;
  return (
    <View>
      {data.map(store => <Store store={store} key={store.id} handleClearSearch={handleClearSearch} navigation={props.navigation}/>)}
    </View>
  )
}

export default Stores;