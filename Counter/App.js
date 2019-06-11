import React, { Component } from 'react';
import Main from './src/Main'
import { Provider } from 'react-redux'
import store from './src/store/index'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>

    );
  }
}
