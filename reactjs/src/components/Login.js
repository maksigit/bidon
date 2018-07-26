import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import MainPage from './MainPage'

let fromServer = [];

class Login extends Component {

  validRegister = (e) => {
    e.preventDefault();


    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(json => {
        fromServer = json;
        fromServer = fromServer.find((item) => {

          return item.email + item.password === this.email.value + this.password.value
        });
        console.log(fromServer);

        if (fromServer) {
          document.querySelector('.successfully').innerHTML = 'Вы вошли в систему';

          return <MainPage/>
        } else {
          console.log('не коректный емейл или пасворд')
        }

      });
  };

  render() {
    return (
      <div className="App">
        <form action="">
          <input type="text" placeholder="Введите E-mail" ref={(input) => {this.email = input}}/>
          <input type="text" placeholder="Введите пароль" ref={(input) => {this.password = input}}/>
          <button onClick={this.validRegister}>Log in</button>
          <Link to='/reg'>Зарегистрироватся</Link>
        </form>
        <div className='error' style={{color: 'red'}}> </div>
        <div className='successfully' style={{color: 'green'}}> </div>
      </div>
    );
  }
}

export default connect(
  state => {
    console.log('state from ComREG =>', state);
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
)(Login);