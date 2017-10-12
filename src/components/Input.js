import React, {Component} from 'react';
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
    let {title, description, phone, email} = this.state
    const newPost = {
      title,
      description,
      phone,
      email
    }
    console.log("newPost ", newPost)
    axios.post('https://freemi-383ac.firebaseio.com/.json', { post: newPost });
  }
  render() {

    const dpr = this.state.dp
      ? (<Icon name='check' type='font-awesome' color='green' underlayColor='transparent' reverseColor='white'/>)
      : (<Icon name='camera' type='font-awesome' color='#DE451C' underlayColor='transparent' reverseColor='white' onPress={() => this.openPicker()}/>)

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

    let {title, description, phone, email} = this.state
    return (
      <View>
      <View style={{paddingTop: 80}}>
          <FormLabel>
            Item
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ title: event })} />

          <FormLabel>
            Description
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ description: event })} />

          <FormLabel>
            Email
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ phone: event })}/>

          <FormLabel>
            Phone
          </FormLabel>
          <FormInput onChangeText={(event) => this.setState({ email: event })} />

          <FormInput style={{ height:0, width:0 }} />
        </View>

        <View style={styles.uploadStyle}>
          {dps}
        </View>
        
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
    bottom: -40
  }
});

export default InputForm;
