import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './login/login';
import LandingPage from './LandingPage/landingPage';
export class Home  extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    landing: false,
    phone:'1234512345',
    otp:'1234',
    }
  }
  updateItem=(item)=> {
   if(item)this.setState({ landing: item });
 }

  render(){
    return(
    <div id="home">{this.state.landing?<LandingPage phone={this.state.phone} otp={this.state.otp}/>: <LoginPage landingPage={this.updateItem}/>}</div>);
}}
ReactDOM.render(<Home />, document.getElementById('root'));
