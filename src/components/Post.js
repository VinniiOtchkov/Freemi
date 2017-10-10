import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import call from 'react-native-phone-call'


const Post = (props) => {
  return (
    <View style={styles.containerStyle}>
          <Image style={styles.imageStyle} source={require('../../public/pickleRick.jpg')} />
      <Text style={styles.titleStyle}>
      {props.post.title}
      </Text>
      <Text>
      {'\n'}
      Description:{'\n'}
      {props.post.description}
      </Text>

      <View style={{ flexDirection: 'row' }}>
      <Icon
      style={styles.phoneStyle}
      name='phone'
      type='font-awesome'
      color='#DE451C'
      underlayColor='transparent'
      reverseColor='white'
      onPress={() => console.log('LOL')}
      />
     <Icon
     style={styles.mailStyle}
     name='envelope'
     type='font-awesome'
     color='#21BAE3'
     underlayColor='transparent'
     reverseColor='white'
     onPress={() => Linking.openURL('mailto:freemitest@gmail.com?subject=Freemi: Someone wants your stuff!')}
     />
     </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  imageStyle: {
    alignSelf: 'center',
    height: 300,
    width: 300
  },
  phoneStyle: {
    marginLeft: '32%'
  },
  mailStyle: {
    marginLeft: '20%'
  },
  titleStyle: {
    fontSize: 30
  }
};

export default Post;
