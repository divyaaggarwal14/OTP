import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './login/login';

export class Home  extends React.Component{

  render(){
    return(
    <div id="home"> <LoginPage/></div>);
}}
ReactDOM.render(<Home />, document.getElementById('root'));
