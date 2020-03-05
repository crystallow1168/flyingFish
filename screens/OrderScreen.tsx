import React, { useState } from 'react';
import { Button, Picker, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const OrderScreen = props => {
  const name = props.navigation.getParam('name');
  const menu = props.navigation.getParam('menu');
  
  const [peas, setPeas] = useState(false)
  const [fishType, setFishType] = useState('Cod');

  const navigateInformationScreen = () => {
    props.navigation.navigate({
      routeName: 'Information',
      params: {
        peas,
        fishType,
      }
    })
  }

  return (
    <View style={styles.screen}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}> {name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}> Select fish type</Text>
      </View>
      <Picker
        selectedValue={fishType}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue) =>
          setFishType(itemValue)
        }>
          {menu.fixed.map((item: string) => <Picker.Item
              label={item}
              value={item}
              key={item}
            />)}
      </Picker>
      <View style={styles.checkboxContainer}>
        <CheckBox
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
          title="Add mushy peas"
          checkedColor='green'
          checked={peas}
          onPress={() => setPeas(!peas)}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <Button
          title="Checkout"
          onPress={navigateInformationScreen} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 40
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
  },
  nameContainer: {
    paddingTop: 30
  },
  textContainer: {
    paddingTop: 100
  },
  checkboxContainer: {
    alignItems: 'center',
    marginTop: 250,
    width: '90%',
  },
  checkoutContainer: {
    paddingTop: 10
  }
});

export default OrderScreen;