import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = (props) => {
return (
  <View style={styles.viewStyle}>

  <Icon
  name='home'
  type='font-awesome'
  color='white'
  underlayColor='transparent'
  style={styles.iconStyle}
  onPress={() => props.navigation.navigate('Home')}
  />
  </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white'
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#DE451C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 2,
    position: 'relative'
  },
  iconStyle: {
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  }
};

//Make the component available to other parts of the App.
export default Header;
