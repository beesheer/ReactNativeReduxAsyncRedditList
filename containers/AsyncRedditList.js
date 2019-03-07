import React from 'react'
import RedditPicker from '../components/RedditPicker'
import PostList from '../components/PostList'
import { StyleSheet, View, StatusBar } from 'react-native'
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions'
import {connect} from 'react-redux'

class AsyncRedditList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this); // Very important to bind to this.
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  handleChange(subreddit) {
    this.props.dispatch(selectSubreddit(subreddit));
    this.props.dispatch(fetchPostsIfNeeded(subreddit));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <RedditPicker
          selectedValue={this.props.selectedSubreddit}
          options={['LeagueOfLegends', 'reactjs', 'dota2', 'canada', 'all']}
          onChange={this.handleChange} // pass in handler funtion
        />
        <PostList
          posts={this.props.posts}
          isFetching={this.props.isFetching}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
function mapStateToProps(state) {
  // Destructuring assignment
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncRedditList)
