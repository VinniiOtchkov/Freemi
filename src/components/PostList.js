import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
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
    filterCriteria: ''
  };
}

componentDidMount() {
  this.props.postActions.fetchPosts();
}

// updateFilter(e) {
//   e.preventDefault();
//   this.setState({ filterCriteria: e.target.value });
// }
  render() {
    console.log('THIS.PROPS', this.props);
    console.log('THIS.PROPS.POSTS', this.props.posts);

    let filteredPosts = this.props.posts
  .filter(post => post.title.toLowerCase()
  .includes(this.state.filterCriteria.toLowerCase()))
  .map(post => <Post key={post.id} post={post} />);

    return (
      <View>
      <FormInput placeholder="Search" />
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
