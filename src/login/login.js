import React from 'react';
//import ReactDOM from 'react-dom';
import './login.scss';
import learnOnline from '../components/learnOnline.png';
import logo from '../components/dummyLogo.png';
import back from '../components/back.png';

export default class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phoneCard:false,
      detailsCheck:false,
      inputValue: '',
      phone:'1234512345',
      otp:'1234',
      warning:false,
    }
  }
giveWarning=(val)=>{
    this.setState({warningText:val});
}
updateInputValue=(e)=>{
  if(!Number(e.target.value && e.target.value!=='')){
    this.setState({inputValue:e.target.value});
    this.giveWarning('Please enter required');
    return;
  }
  else if (!Number(e.target.value)){  this.giveWarning('Please enter digits');
    return;}
  this.setState({inputValue:e.target.value});
}

  changeState=()=>{
    console.log(this.state.inputValue,this.state.otp);
    const card = this.state.phoneCard;
    let warn = this.state.warning;
    if (this.state.inputValue==='') {this.giveWarning('Please enter required');warn=true;}
    else if (!this.state.phoneCard&&this.state.inputValue!==this.state.phone)  {this.giveWarning('Enter registered Phone no.');warn=true;}
    else if (this.state.phoneCard&&this.state.inputValue!==this.state.otp)  {this.giveWarning('Incorrect OTP');warn=true;};
    if(!card & !warn)
    {
      this.setState({phoneCard:!card, inputValue: '', warningText:''});
    }
    if(card & !warn)this.giveWarning('Congratulations!');
  }
goBack=()=>{
    const card = this.state.phoneCard;
    if(card)
    {
      this.setState({phoneCard:!card, inputValue:''});
    }
  }
  render(){
    return(
    <div id="main">
    <div id="wrapper">
      <div className="left">
      {this.state.phoneCard?<img src={back} alt="" className="back" onClick={()=>this.goBack()}/>:<div className="back"/>}
      <img src={logo} alt="" className="logo"/>
      <div className="details">
      <div className="signIn">Sign In</div>
      <div className="enterDetails">{this.state.phoneCard?'Please enter OTP':'Please enter phone number'}</div>
      <div className="box"><input type="text" className="textbox" name="sign" id="textbox" placeholder="Enter required ( digits 0-9)"
      value={this.state.inputValue} onChange={this.updateInputValue}/></div>
      <div className="warningText">{this.state.warningText}</div>
      <div className="submit" onClick={()=>this.changeState()}><div className="btn">{this.state.phoneCard?'SUBMIT':'NEXT'}</div></div></div>
      </div>
        <div className="right">
        <img src={learnOnline} alt="" className="learn"/></div>
        </div></div>
  );
}}
