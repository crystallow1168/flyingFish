import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

const InformationScreen = props => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');

  const checkEmptyInput = (input: string) => {
    if (input.length > 0) {
      return false;
    }
    return true;
  }

  const navigateConfirmationScreen = () => {
    props.navigation.navigate({
      routeName: 'Confirmation',
      params: {
        name,
        address,
        instructions,
        fishType: props.navigation.getParam('fishType'),
        peas: props.navigation.getParam('peas')
      }
    })
  }

  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> Please enter your information</Text>
      </View>
      <View style={styles.infoContainer}>
        <Input
          label='Name'
          placeholder='John Doe'
          onChangeText={text => setName(text)}
          value={name}
          errorMessage={checkEmptyInput(name) ? '*required' : ''} />
        <Input
          label='Address'
          placeholder='1600 Penny Ave, Washington, DC 20500'
          onChangeText={text => setAddress(text)}
          value={address}
          errorMessage={checkEmptyInput(address) ? '*required' : ''} />
        <Input
          label='Special delivery instructions'
          placeholder='(optional)'
          onChangeText={text => setInstructions(text)}
          value={instructions}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Submit Order"
          onPress={navigateConfirmationScreen} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    alignSelf: 'center'
  },
  screen: {
    alignItems: 'center',
    marginTop: 40
  },
  infoContainer: {
    marginTop: 100,
    width: '90%',
    height: '50%',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    marginTop: 80,
  }
});

export default InformationScreen;