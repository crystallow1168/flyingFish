import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { Store as StoreType } from '../screens/StoreListScreen';

type Props = {
  navigateOrderScreen: () => void,
  store: StoreType
}

const Store = (props: Props) => {
  const { store: { name, description }, navigateOrderScreen } = props;
  return (
    <Card>
      <View style={styles.storeContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <Divider />
      <Button
        title="Go to Order"
        onPress={navigateOrderScreen} />
    </Card>
  )
}

const styles = StyleSheet.create({
  storeContainer: {
    height: 80,
    alignItems: 'center',
    padding: 5,
  },
  nameContainer: {
    paddingBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontWeight: '300',
    fontSize: 10,
    textAlign: 'center'
  }
})

export default Store;