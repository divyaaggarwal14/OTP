import React from 'react';
//import ReactDOM from 'react-dom';
import './landingPage.scss';
import {dummyData} from './../dummyData.js';

export default class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     data:[],
     selectedOption:null,
     selectedOrderOption:null,
     activeTab:'Dashboard',
     navigationBar:[
       {tab:'Dashboard'},
        {tab:'Create classroom'},
         {tab:'Schedule'},
          {tab:'Settings'},
           {tab:'Privacy Policy'},
           {tab:'Sign out'},
     ],
     sortDropdown: false,
     selectedSortType:null,
     order:'ASC',
    }
  }
componentDidMount(){
this.setData();
}

setData=()=>{
  this.setState({data:dummyData[this.props.phone]});
}
displaySideBar=(item,index)=>{
  return(
    <div className="sideBarTab">
    {this.state.activeTab==='Dashboard'&&item.tab===this.state.activeTab?<div className="sideBarTextLight">{item.tab}</div>:<div className="sideBarText">{item.tab}</div>}
    </div>
  );
}
displayCards=(item,index)=>{
  return(
    <div className="Card">

     <div className="leftCard">
     <div className="enrollmentCount">{item.students&&item.students.length?item.students.length:0}</div>
     <div className="enrollment">Enrollments</div>
     </div>
     <div className="rightCard">
     <div className="details">
     <div className="detailsHeader">Name:</div>
     <div className="detailsSubtext">{item.name?item.name:null}</div>
     </div>
     <div className="details">
     <div className="detailsHeader">Subject:</div>
     <div className="detailsSubtext">{item.subject?item.subject:null}</div>
     </div>
     </div>
    </div>

  );
}
 changeState=()=>{
   const sortDropdown=this.state.sortDropdown;
   this.setState({sortDropdown:!sortDropdown});
 }
 selectedType=(val)=>{
   console.log(val);
   this.sortFunction(val);
   this.setState({selectedSortType:val});
 }

sortFunction=(val)=>{
  const data =this.state.data;
  if(val!=='enrollments'){
data.sort((a,b) => (a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0));
}
else {
 data.forEach((item, i) => {
   item.enrollments=item.students.length;
 });
data.sort((a,b) => (a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0));
}
this.setState({data});
}
showDropdown=()=>{
  return(<div className="dropdown">
    <ul onClick={()=>this.changeState()}>
      <li onClick={()=>this.selectedType('name')}>Name</li>
      <li onClick={()=>this.selectedType('subject')}>Subject</li>
        <li onClick={()=>this.selectedType('enrollments')}>Enrollments</li>
    </ul>
  </div>);
}
  render(){
    return(
    <div id="main2">
    <div id="header">
    <div className="logo">LOGO</div>
    <div className="hello">Hello, User!</div>
    </div>
    <div id="wrap">
       <div id="navigation">{this.state.navigationBar.map(this.displaySideBar)}</div>
       <div id="landing">
        <div className="sortCard" onClick={()=>this.changeState()}>SORT BY: {this.state.selectedSortType?this.state.selectedSortType.toUpperCase():''}</div>
        {this.state.sortDropdown?this.showDropdown():<div className="noDropdown"/>}
       <div className="landingCard">{this.state.data.map(this.displayCards)}</div>
       </div>
      </div>
  </div>
  );
}}
