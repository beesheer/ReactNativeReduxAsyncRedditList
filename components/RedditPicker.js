import React from 'react'
import {View, Picker} from 'react-native'

export default class RedditPicker extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', height: 50, backgroundColor: 'grey' }}>
        <Picker
          selectedValue={this.props.selectedValue}
          style={{ width: '100%', height: 50 }}
          onValueChange={(itemValue, itemIndex) => this.props.onChange(itemValue)}
        >
          {
            this.props.options.map(subreddit => (
              <Picker.Item key={subreddit} label={subreddit} value={subreddit} />
            ))
          }
        </Picker>
      </View>
    )
  }
}