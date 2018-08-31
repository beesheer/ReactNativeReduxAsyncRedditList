import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

export default class PostList extends React.Component {
  render() {
    return (
      <View style={{width: '100%', flex: 1}}>
        <View>
          <Text>{this.props.isFetching ? 'Loading' : ''}</Text>
        </View>
        <FlatList
          data={this.props.posts}
          renderItem={({item}) => <Text style={styles.postBlock}>{item.title}</Text>} // renderItem the pass-in param is an object!
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postBlock: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 5
  }
});