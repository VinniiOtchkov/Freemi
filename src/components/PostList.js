import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { FormInput } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions';
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
  render() {
    console.log('THIS.STATE', this.state);
    console.log('THIS.PROPS', this.props);
    console.log('THIS.PROPS.POSTS', this.props.posts);

    let filteredPosts = this.props.posts
  .filter(post => post.title.toLowerCase()
  .includes(this.state.filterCriteria.toLowerCase()))
  .map(post => <Post key={post.id} post={post} />);

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

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    postActions: bindActionCreators(postActions, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PostList);
