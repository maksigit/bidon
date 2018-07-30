import React, {Component} from 'react';

import {connect} from 'react-redux';

class MainPage extends Component {

  render() {
    return (
      <div className="App">
        <div>Тут будет Лого</div>
        <div>Тут будут маршруты</div>
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