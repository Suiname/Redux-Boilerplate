'use strict';

import React, { Component } from 'react';

class ProgressBar extends React.Component{
 constructor(props){
   super(props);
 }
 componentDidMount() {
   $('.progCircle').css('background-color','lightgray');
   $('.progLink').css('background-color','lightgray');
   $('#progCircle0').css('background-color','rgb(21, 101, 192)');
   $('#progLink0').css('background-color','rgb(21, 101, 192)');
 }
 onChange(index)    {
     $('.progCircle').css('background-color','lightgray');
     $('.progLink').css('background-color','lightgray');
   for(var i = 0; i <= index; i++) {
     $('#progCircle' + i).css('background-color','rgb(21, 101, 192)');
     $('#progLink' + i).css('background-color','rgb(21, 101, 192)');
   }
   if(index == 3)  {
     $('#progLink4').css('background-color','rgb(21, 101, 192)');
   }
 }

 render() {
   return (
     <div className="row">

       <div className="col s3 progHeader" id="progHeader0">
         <p>Patient</p>
         <div className="circle progCircle" id="progCircle0"></div>
         <div className="progLink" id="progLink0"></div>
       </div>
       <div className="col s3 progHeader" id="progHeader1">
         <p>Physician</p>
         <div className="circle progCircle" id="progCircle1"></div>
         <div className="progLink" id="progLink1"></div>
       </div>
       <div className="col s3 progHeader" id="progHeader2">
         <p>Sequencing</p>
         <div className="circle progCircle" id="progCircle2"></div>
         <div className="progLink" id="progLink2"></div>
       </div>
       <div className="col s3 progHeader" id="progHeader3">
         <p>Confirm</p>
         <div className="circle progCircle" id="progCircle3"></div>
         <div className="progLink" id="progLink3"></div>
         <div className="progLink" id="progLink4"></div>
       </div>

       <div className="col s12">
         <p></p>
       </div>

     </div>
   );
 }
}

export default ProgressBar;
