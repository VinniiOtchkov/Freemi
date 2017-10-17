import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { FormInput, FormLabel, Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';

let count = 1;

class InputForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      phone: null,
      email: '',
      picURL: 'https://firebasestorage.googleapis.com/v0/b/freemi-383ac.appspot.com/o/12345%2FFreemi1.jpg?alt=media&token=979b8902-aa49-4033-a626-1c620cea0077',
      loading: false,
      dp: null
    };
  }

  openPicker() {
    this.setState({ loading: true });
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    const uid = '12345';
    ImagePicker.openPicker({width: 300, height: 300, cropping: true, mediaType: 'photo'}).then(image => {
      count++;
      const imagePath = image.path
      let uploadBlob = null
      const imageRef = firebase.storage().ref(uid).child('Freemi' + count + '.jpg')
      const mime = 'image/jpg'
      fs.readFile(imagePath, 'base64').then((data) => {
        return Blob.build(data, {type: `${mime};BASE64`})
      }).then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, {contentType: mime})
      }).then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      }).then((url) => {
        const userData = {}
        const obj = {}
        obj['loading'] = false
        obj['dp'] = url
        this.setState(obj)
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  submitPost() {
    const { title, description, phone, email, picURL } = this.state
    this.props.navigation.navigate('Home')
    axios.post('https://freemi-383ac.firebaseio.com/.json',
    {
      title,
      description,
      phone,
      email,
      picURL
    });
  }
  render() {
    const dpr = this.state.dp
      ? (<Icon name='check' type='font-awesome' color='#E59500' underlayColor='transparent' reverseColor='white'/>)
      : (<Icon name='camera' type='font-awesome' color='#D6431C' underlayColor='transparent' reverseColor='white' onPress={() => this.openPicker()}/>)

    const dps = this.state.loading
      ? <ActivityIndicator animating={this.state.loading}/>
      : (
        <View style={styles.container}>
          <View style={{
            flexDirection: 'row'
          }}>
            {dpr}
          </View>
        </View>
      );

    return (
      <View>
      <View style={{ paddingTop: 70 }}>
          <FormLabel>
            Item:
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ title: event })} />

          <FormLabel>
            Description:
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ description: event })} />

          <FormLabel>
            Email:
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ email: event })} />

          <FormLabel>
            Phone:
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ phone: event })} />

          <FormInput style={{ height: 0, width: 0 }} />
        </View>

        <View style={styles.uploadStyle}>
          {dps}
        </View>

        <Icon
        onPress={() => this.submitPost()}
        underlayColor='transparent'
        name='plus'
        type='font-awesome'
        color='white'
        style={styles.buttonStyle}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  uploadStyle: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '10%',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'absolute',
    left: -20,
    right: 0,
    bottom: -50
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '102%',
    height: '10%',
    backgroundColor: '#68C6B3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -227
  }
});

export default InputForm;
