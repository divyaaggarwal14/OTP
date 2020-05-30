import React from 'react';
//import ReactDOM from 'react-dom';
import './landingPage.scss';
//import Select from 'react-select';
import {dummyData} from './../dummyData.js';
// import logo from '../components/dummyLogo.png';

// const sortBy = [
//   { value: 'name', label: 'name' },
//   { value: 'subject', label: 'subject' },
// ];
// const options = [
//   { value: 'Highest to lowest', label: 'Highest to lowest' },
//   { value: 'Lowest to highest', label: 'Lowest to highest' },
// ];
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
     ]
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
    <div className="sideBarText">{item.tab}</div>
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
handleChange = (selectedOption) => {
   this.setState({ selectedOption });
   console.log(selectedOption);
   if(selectedOption.value ==='name'){this.sortLowToHigh(selectedOption.value)}
   else if (selectedOption.value ==='subject'){this.sortLowToHigh(selectedOption.value)}
 }
 handleChangeOrder = (selectedOrderOption) => {
    this.setState({ selectedOrderOption });
    const selectedOption=this.state.selectedOption;
     console.log(selectedOption,'f');
    if(selectedOrderOption.value ==='Lowest to highest'){this.sortLowToHigh(selectedOption.value)}
     else if (selectedOrderOption.value ==='Highest to lowest'){this.sortHighToLow(selectedOption.value)}
  }
  sortLowToHigh=(val)=>{
        const data = this.state.data;
         const temArr= data.sort(function (a, b) {
        return a[val] - b[val];
     });
     console.log(temArr);
  this.setState({ data: temArr });}


  sortHighToLow=(val)=>{
      const data = this.state.data;
    const temArr=data.sort(function (a, b) {
        return b[val] - a[val];
     });
 this.setState({ products: temArr });}


  render(){
    return(
    <div id="main2">
    <div id="header">
    <div className="logo">LOGO</div>
     {/*<div id="sortPart">
          <Select
          className ='sortbtn'
         value={this.state.selectedOption}
         onChange={this.handleChange}
         options={sortBy}
       />
       <Select
           className ='sortbtn2'
          value={this.state.selectedOrderOption}
          onChange={this.handleChangeOrder}
          options={options}
        />
     </div>*/}
    </div>
    <div id="wrap">
       <div id="navigation">{this.state.navigationBar.map(this.displaySideBar)}</div>
       <div id="landing">
       {this.state.data.map(this.displayCards)}
       </div>
      </div>
  </div>
  );
}}
