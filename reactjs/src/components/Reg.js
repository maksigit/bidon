import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

class Reg extends Component {

  putToDb = () => {
    let data = {};
    data.email = this.email.value;
    data.password = this.password.value;

    let json = JSON.stringify(data);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/users', false);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
      let users = JSON.parse(xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === "200") {
        console.table(users);
      } else {
        console.error(users);
      }
    };
    xhr.send(json);
  };

  validRegister = (e) => {
    e.preventDefault();

    let fromServer = [];
    let validEmail = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(this.email.value);

    if(validEmail) {
      fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(json => {
          fromServer = json;
          fromServer = fromServer.find((item) => {
            return item.email === this.email.value
          });

          if (fromServer === undefined) {
            this.putToDb();
            document.querySelector('.successfully').innerHTML = 'Вы успешно зарегестрировались перейдите на Главную для входа';
            document.querySelector('.error').innerHTML = ' '
          } else {
            document.querySelector('.error').innerHTML = 'Этот емаил зарегистрирован'
          }
        });
    } else {
      document.querySelector('.error').innerHTML = 'Введите корректный ЕМЕИЛ'
    }
  };

  render() {
    return (
      <div className="App">
        <Link to='/'>Главная</Link>
        <form action="">
          <input type="text" placeholder="Введите E-mail" ref={(input) => {this.email = input}}/>
          <input type="text" placeholder="Введите пароль" ref={(input) => {this.password = input}}/>
          <button onClick={this.validRegister}>Зарегистрироватся</button>
        </form>
        <div className='error' style={{color:'red'}}> </div>
        <div className='successfully' style={{color:'green'}}> </div>
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
)(Reg);