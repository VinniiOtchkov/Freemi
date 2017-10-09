import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as postActions from '../actions';
import { FormInput } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import Post from './Post';

class PostList extends Component {

  constructor(props) {
  super(props);

  this.state = {
    list: []
  };
}

componentDidMount() {
  this.props.postActions.fetchPosts();
}
  render() {
    console.log('THIS.PROPS', this.props);
    console.log('THIS.PROPS.POSTS', this.props.posts);

    let filteredPosts = this.props.posts
  .filter(post => post.title.toLowerCase()
  .includes(this.state.filterCriteria.toLowerCase()))
  .map(post => <Post key={post.id} post={post} />);

    return (
      <View style={styles.form}>
      {filteredPosts}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingTop: 0
  }
});

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    postActions:bindActionCreators(postActions, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PostList);
