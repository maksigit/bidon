import React, {Component} from 'react';

import MainPage from '../components/MainPage'

function logComp(Comp) {
  return class extends Component {

    render () {
      return (
      <div>
        <Comp />
        <MainPage />
      </div>
      )
    }
  }
}

export default logComp;