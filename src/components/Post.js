import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

const Post = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: props.post.picURL }} />
      <Text style={{ fontSize: 30 }}>
      {props.post.title}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
      {'\n'}
      Description:{'\n'}
      </Text>
      <Text>
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
      onPress={() => Linking.openURL(`tel: ${props.post.phone}`)}
      />
     <Icon
     style={styles.mailStyle}
     name='envelope'
     type='font-awesome'
     color='#21BAE3'
     underlayColor='transparent'
     reverseColor='white'
     onPress={() => Linking.openURL(`mailto:${props.post.email}?subject=Freemi: Someone wants your stuff!`)}
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
    height: 310,
    width: 310,
    borderRadius: 2
  },
  phoneStyle: {
    marginLeft: '32%',
  },
  mailStyle: {
    marginLeft: '20%',
  }
};

export default Post;
