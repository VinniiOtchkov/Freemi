import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => {
  return (
  <View style={styles.viewStyle}>
    <Icon
    name='camera'
    type='font-awesome'
    color='#DE451C'
    underlayColor='transparent'
    reverseColor='white'
    onPress={() => console.log('Works!')}
    />

  </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'absolute',
    left: 130,
    right: 0,
    bottom: 0,
  }
});

export default Footer;
