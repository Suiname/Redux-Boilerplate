'use strict';

import React, { Component, PropTypes } from 'react';

// Load Routes
import ProgressBar from '../../components/progressBar';
import SequencingInput from '../../components/sequencingInput';
import Form from '../../components/form';
import Validate from '../../components/validate';


let page_1_fields = ['Name', 'Gender', 'Tissue', 'Age', 'PatientID', 'Diagnosis'];
let page_2_fields = ['Physician', 'Contact', 'Germline', 'Institution', 'Pathologist', 'Biopsy'];

class PatientForm extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     loading: false,
     pageNum: 0,
     errMsg: '',
     info: {
       Name: '',
       Age: '',
       Gender: '',
       PatientID: '',
       Tissue: '',
       Diagnosis: '',
       Biopsy: '',
       Germline: '',
       Physician: '',
       Contact: '',
       Institution: '',
       Pathologist: ''
     },
     seqInfo: {
       GermlineExomeDNA: false,
       TumorExomeDNA: false,
       TumorTranscriptome: false
     }
   };
 }
 getChildContext() {
   return {
     handleInputChange: this.handleInputChange.bind(this),
     formInfo: this.state.info,
     sequencingChoice: this.sequencingChoice.bind(this),
     seqInfo: this.state.seqInfo
   }
 }
 handleInputChange(e) {
   let value = e.target.value;
   let formfield = e.target.id.split('formfield_')[1];
   this.setState((state) => {
     state.info[formfield] = value;
     return state;
   });
 }
 sequencingChoice(e)  {
   let seqChoice = e.currentTarget.id;
   this.setState((state) => {
     if(state.seqInfo[seqChoice] == true) {
       state.seqInfo[seqChoice] = false;
     } else {
       state.seqInfo[seqChoice] = true;
     }
     return state;
   });
 }
 componentDidMount() {
   $("#patientInputPrev").prop('disabled',true);
 }
 prevPage(e) {
   e.preventDefault();
   if(this.state.pageNum == 0)  {
     return;
   }
   this.setState(function(state){
     state.errMsg = '';
     state.pageNum -= 1;
     return state;
   }, function() {
     this.refs['child'].onChange(this.state.pageNum);
   });
 }
 nextPage(e) {
   e.preventDefault();
   //Form Input validation
   if (this.state.pageNum === 0 || this.state.pageNum === 1) {
     var page = page_1_fields;
     if (this.state.pageNum === 1) page = page_2_fields;
     for (var i = 0; i < page.length; i++) {
       if (page[i] === 'Age' && isNaN(parseInt(this.state.info[page[i]]))) {
         this.setState((state) => {
           state.errMsg = 'Age must be a number!';
           return state;
         })
         return;
       }
       if (!this.state.info[page[i]].length > 0) {
         this.setState((state) => {
           state.errMsg = `Field required: ${page[i]}`;
           return state;
         })
         return;
       }
     }
   }

   if (this.state.pageNum == 3)  {
     return;
   }
   this.setState(function(state){
     state.errMsg = '';
     state.pageNum += 1;
     return state;
   }, function() {
     this.refs['child'].onChange(this.state.pageNum);
   });
 }
 saveInformation(e) {
   e.preventDefault();
   this.setState((state) => {
     state.loading = true;
     return state;
   }, () => {
     window.PatientInfo = this.state.info;
     $.ajax({
       url: '/api/actionableterms',
       type: "POST",
       data: this.state.info,
       dataType: 'json',
       success: function(data) {
         console.log('SUCCESSFUL VALIDATION');
         if (data) {
           window.actionTerms = JSON.parse(data).Contents[0].Contents;
           this.context.router.push('/reportform');
         }
       }.bind(this),
       error: function(err) {
         console.log('err', err);
       }
     });
   })
 }
 render() {
   let prevButton = null, loadingComponent = null;
   if (this.state.pageNum !== 0) {
     prevButton = <button id='patientInputPrev' className="waves-effect waves-light btn blue darken-3" onClick={this.prevPage.bind(this)}>Prev</button>
   }
   if (this.state.loading) {
     loadingComponent = <LoadComponent />
   }
   let nextButton = <button id='patientInputNext' className="waves-effect waves-light btn blue darken-3" onClick={this.nextPage.bind(this)}>Next</button>;
   let validButton = <button className="waves-effect waves-light btn blue darken-3 right" onClick={this.saveInformation.bind(this)}>Validate</button>
   let nextOrValid = (this.state.pageNum === 3) ? validButton : nextButton;
    return (

      <div className="container">
        {loadingComponent}
        <div className="row">
          <div className="col s10 push-s1 white patientform lighten-3" id="progInputField">
            <div className="col s12">
              <img className="col s4 push-s4" src='/images/logo.png' alt='tempus-logo'/>
            </div>
            <ProgressBar ref="child"/>
            <VariableComponent pageNum={this.state.pageNum} seqInfo={this.state.seqInfo}/>
            <div className="input-field col s6">
              {prevButton}
            </div>
            <div className="input-field col s6">
              {nextOrValid}
            </div>
            <div className="col s12"><p className='red-text center-align'>{this.state.errMsg}</p></div>
          </div>
        </div>
      </div>
    );
  }
}

const LoadComponent = ({}) => {
  return (
    <div id='loadOverlay'>
      <div className='center-align' id='loadingGif'>
        <img src='/images/loading.gif' alt='Your content will be ready shortly'  />
      </div>
    </div>
  )
}

const VariableComponent = ({pageNum,seqInfo}) => {
  if(pageNum == 0)  {
    return <Form fieldsPerRow={2} formFields={page_1_fields} />;
  }
  if(pageNum == 1)  {
    return <Form fieldsPerRow={2} formFields={page_2_fields} />;
  }
  if(pageNum == 2)  {
    return <SequencingInput choices={seqInfo}/>;
  }
  if(pageNum == 3)  {
    return <Validate choices={seqInfo}/>;
  }
}

PatientForm.contextTypes = {
  router: PropTypes.object.isRequired
}

PatientForm.childContextTypes = {
  handleInputChange: PropTypes.func,
  sequencingChoice: PropTypes.func,
  formInfo: PropTypes.object,
  seqInfo: PropTypes.object
}

 export default PatientForm;
