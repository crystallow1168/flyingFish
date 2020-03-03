import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const ConfirmationScreen = props => {

  const name = props.navigation.getParam('name');
  const address = props.navigation.getParam('address');
  const instructions = props.navigation.getParam('instructions');
  const fishType = props.navigation.getParam('fishType');
  const peas = props.navigation.getParam('peas');

  return (
    <View style={styles.screen}>
      <Card title="Order Summary" containerStyle={{ width: '90%', height: '60%' }}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>
            Fish type: {fishType} {peas ? 'w/ mushy peas' : ''}
          </Text>
          <Text style={styles.text}>
            Name: {name}
          </Text>
          <Text style={styles.text}>
            Address: {address}
          </Text>
          <Text style={styles.text}>
            {instructions ? `Special delivery instructions: ${instructions}` : ''}
          </Text>
        </View>
      </Card>
      <View style={styles.thanksContainer}>
        <Text style={styles.thanksMessage}> Thank You!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Order Again"
          onPress={() => {
            props.navigation.navigate('Stores')
          }} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 150
  },
  thanksContainer: {
    padding: 30
  },
  thanksMessage: {
    fontSize: 20,
  },
  text: {
    fontSize: 24
  },
  infoContainer: {
    height: '60%',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    padding: 50
  }
});

export default ConfirmationScreen;