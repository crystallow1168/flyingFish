import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Picker } from 'react-native';

import { CheckBox } from 'react-native-elements';

const OrderScreen = props => {
  const [checked, setChecked] = useState(false)
  const [fishType, setFishType] = useState('');

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
        <Picker.Item label="Cod" value="cod" />
        <Picker.Item label="Halibut" value="halibut" />
      </Picker>
      <View style={styles.checkboxContainer}>
        <CheckBox
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
          title="Add mushy peas"
          checkedColor='green'
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <Button
          title="Checkout"
          onPress={() => {
            props.navigation.navigate('Information')
          }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
})

export default OrderScreen;