import React, { Component, PropTypes } from 'react';


class Validate extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(this.props.choices.GermlineExomeDNA == true)  {
      $("#GermlineExomeDNA").find('p').css('color','black');
      $("#GermlineExomeDNA").css('border','2px solid steelblue');
    }
    if(this.props.choices.TumorExomeDNA == true)  {
      $("#TumorExomeDNA").find('p').css('color','black');
      $("#TumorExomeDNA").css('border','2px solid steelblue');
    }
    if(this.props.choices.TumorTranscriptome == true)  {
      $("#TumorTranscriptome").find('p').css('color','black');
      $("#TumorTranscriptome").css('border','2px solid steelblue');
    }
  }
  constructFields() {
    let keys = Object.keys(this.context.formInfo);
    return keys.map((key, i) => {
      return (
        <div className='col s3' key={i}>
          <div className='form-validate'>
            <div className='form-label'>
              {key + ':'}
            </div>
            <div className='form-confirm'>
              {this.context.formInfo[key]}
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    let fields = this.constructFields();
    return (
      <div>
        {fields}
        <div className="col s10 push-s1" id="sequencingConfirmWrapper">
          <div className="col s4">
            <div className="col s10 sequencingConfirm" id="GermlineExomeDNA">
              <p>Germline</p><p>Exome</p>
            </div>
          </div>
          <div className="col s4">
            <div className="col s10 push-s1 sequencingConfirm" id="TumorExomeDNA">
              <p>Tumor</p><p>Exome</p>
            </div>
          </div>
          <div className="col s4">
            <div className="col s10 push-s2 sequencingConfirm" id="TumorTranscriptome">
              <p>Tumor</p><p>Transcriptome</p>
            </div>
          </div>
        </div>
        <div className="col s12">
          <br/>
        </div>
      </div>
    )
  }
}

Validate.contextTypes = {
  formInfo: PropTypes.object
}

export default Validate;
