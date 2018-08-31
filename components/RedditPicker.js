import React from 'react'
import {View, Picker} from 'react-native'

export default class RedditPicker extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      selected: ''
    }
  }

  render() {
    return (
      <View style={{ width: '100%', height: 50, backgroundColor: 'grey' }}>
        <Picker
          selectedValue={this.state.selected}
          style={{ width: '100%', height: 50 }}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}
        >
          <Picker.Item label='LeagueOfLegends' value='LeagueOfLegends' />
          <Picker.Item label='dota2' value='dota2' />
        </Picker>
      </View>
    )
  }
}