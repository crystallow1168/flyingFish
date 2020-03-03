import React, { useState } from 'react';
import { Button, Picker, StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const OrderScreen = props => {
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
      <View style={styles.textContainer}>
        <Text style={styles.text}> Select fish type</Text>
      </View>
      <Picker
        selectedValue={fishType}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue) =>
          setFishType(itemValue)
        }>
        <Picker.Item label="Cod" value="Cod" />
        <Picker.Item label="Halibut" value="Halibut" />
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
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textContainer: {
    paddingTop: 140
  },
  pickerContainer: {
    paddingTop: 10,
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