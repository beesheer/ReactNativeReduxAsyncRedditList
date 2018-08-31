import React from 'react'
import { FlatList, View, Text } from 'react-native'

export default class PostList extends React.Component {
  render() {
    return (
      <View style={{width: '100%', flex: 1, backgroundColor: 'green'}}>
        <FlatList
          data={[{title: 'ABC', key: '1'}, {title: 'ddd', key: '2'}, {title: 'ABC', key: '3'}]}
          renderItem={({item}) => <Text>{item.title}</Text>} // renderItem the pass-in param is an object!
        />
      </View>
    )
  }
}