import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { FormInput } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions';
import Post from './Post';

class Input extends Component {

  constructor(props) {
    super(props)
      this.state = {
        title: '',
        description: '',
        phone: null,
        email: '',
      }
  }

  submitPost() {
    let { title, description, phone, email } = this.state
    const newPost = {
      title,
      description,
      phone,
      email
    }
    console.log("newPost - ", newPost)
    axios.post('https://freemi-383ac.firebaseio.com/.json', {post: newPost})
    })
  }
  render() {
    let { title, description, phone, email } = this.state
    return (
      <View>
        <FormInput
        onChangeText={(event) => this.setState({ filterCriteria: event })} placeholder="Search..."
        />
        <View style={styles.postsStyle}>
          {filteredPosts}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postsStyle: {
  paddingTop: 220
  }
});


export default Input;
