import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';

let count = 0;
const config = {
  apiKey: 'AIzaSyDEKGnKtgGJ50L-dmXlG7MWXf5Q7ovZLqs',
  databaseURL: 'https://freemi-383ac.firebaseio.com',
  storageBucket: 'freemi-383ac.appspot.com'
};

export default class Footer extends Component {
  constructor(props) {
   super(props);
   this.state = {
     loading: false,
     dp: null
   };
  }
  render() {
    const dpr = this.state.dp ? (<Icon
    name='check'
    type='font-awesome'
    color='green'
    underlayColor='transparent'
    reverseColor='white'
      />) : (<Icon
       name='plus'
       type='font-awesome'
       color='#DE451C'
       underlayColor='transparent'
       reverseColor='white'
      onPress={() => this.props.navigation.navigate('InputForm')}
      />)

    const dps = this.state.loading ?
    <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        { dpr }
      </View>
    </View>);
console.log('this.props', this.props.navigation)
    return (
      <View style={styles.uploadStyle}>
      <TouchableOpacity>
        { dps }
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  uploadStyle: {
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
