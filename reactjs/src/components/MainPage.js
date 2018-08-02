import React, {Component} from 'react';

import {connect} from 'react-redux';
import MyGoogleMapComponent from './MyGoogleMapComponent'

class MainPage extends Component {

  render() {
    return (
      <div className="App">
        <div>Привет {this.props.login}</div>
        <div>Ваши маршруты</div>
        <div>
          <MyGoogleMapComponent
            ContainerElement={
              <div style={{height: '100%'}}/>
            }
            MapElement={
              <div style={{height: '100%'}}/>
            }
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return ({
      testStore: state
    })
  },
  dispatch => {
    return ({

      AddUser: (user) => {
        dispatch({type: 'ADD_USER', payload: user})
      },

      onTodoClick: (id) => {
        // dispatch(toggleTodo(id))
      }

    })
  }
)(MainPage);