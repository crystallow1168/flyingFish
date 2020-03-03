import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Store from '../components/Store';
import {Store as StoreType} from '../screens/StoreListScreen'

type Props = {
  data: StoreType[],
  navigateOrderScreen: () => void
}

const Stores = (props: Props) => {

  const { data, navigateOrderScreen} = props;
  return (
    <View>
      {data.map(store => <Store store={store} key={store.id} navigateOrderScreen={navigateOrderScreen}/>)}
    </View>
  )
}

export default Stores;