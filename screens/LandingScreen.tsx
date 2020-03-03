import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const LandingScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}> Flying Fish</Text>
      <Avatar
        rounded
        activeOpacity={0.7}
        size="xlarge"
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVuZ3jAYBdcJzoQItzTbSmXwt6aVNZhlr-JBoJ0OLbl8jBALhE',
        }}
      />
      <Button
        title="Start order"
        onPress={() => {
          props.navigation.navigate('Stores')
        }} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default LandingScreen;