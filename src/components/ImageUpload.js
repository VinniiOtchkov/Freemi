import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';

let count = 0;
const config = {
  apiKey: 'AIzaSyDEKGnKtgGJ50L-dmXlG7MWXf5Q7ovZLqs',
  databaseURL: 'https://freemi-383ac.firebaseio.com',
  storageBucket: 'freemi-383ac.appspot.com'
};

firebase.initializeApp(config);

export default class ImageUpload extends Component {
  constructor(props) {
   super(props);
   this.state = {
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
    ImagePicker.openPicker({
      width: 600,
      height: 600,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {
      count++
      const imagePath = image.path
      let uploadBlob = null

      const imageRef = firebase.storage().ref(uid).child('Freemi'+ count+'.jpg')
      const mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          const userData = {}
          const obj = {}
          obj['loading'] = false
          obj['dp'] = url
          this.setState(obj)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    const dpr = this.state.dp ? (<TouchableOpacity onPress={() => this.openPicker()}><Image
         style={{ width: 100, height: 100, margin: 5 }}
         source={{ uri: this.state.dp }}
       /></TouchableOpacity>) : (<Button
      onPress={() => this.openPicker()}
      title={'Upload Picture'}
      />)

    const dps = this.state.loading ?
    <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        { dpr }
      </View>
    </View>);

    return (
      <View style={styles.container}>
        { dps }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
});