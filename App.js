import React from 'react';
import configStore from './configStore'
import { Provider } from 'react-redux'
import AsyncRedditList from './containers/AsyncRedditList';

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

