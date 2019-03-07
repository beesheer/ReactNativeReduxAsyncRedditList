import React from 'react';
import configStore from './configStore'
import { Provider } from 'react-redux'
import AsyncRedditList from './containers/AsyncRedditList';
// Need to improve to use redux-saga and AsyncStorage for state management
// Along with redux



const store = configStore()
store.subscribe(() => {
  console.log(store.getState().selectedSubreddit)
})
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncRedditList />
      </Provider>
    );
  }
}

