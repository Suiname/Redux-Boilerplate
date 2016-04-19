'use strict';

import React, { Component, PropTypes } from 'react';

class SequencingInput extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.setupOnClick();
    if(this.props.choices.GermlineExomeDNA == true)  {
      var Seq = $("#GermlineExomeDNA");
      Seq.css('border','2px solid steelblue');
      Seq.find('.seqHeader').css('color','black');
      Seq.find('.material-icons').html("remove");
      Seq.find('.material-icons').toggleClass("blue-grey lighten-1","blue darken-3");
    }
    if(this.props.choices.TumorExomeDNA == true)  {
      var Seq = $("#TumorExomeDNA");
      Seq.css('border','2px solid steelblue');
      Seq.find('.seqHeader').css('color','black');
      Seq.find('.material-icons').html("remove");
      Seq.find('.material-icons').toggleClass("blue-grey lighten-1","blue darken-3");
    }
    if(this.props.choices.TumorTranscriptome == true)  {
      var Seq = $("#TumorTranscriptome");
      Seq.css('border','2px solid steelblue');
      Seq.find('.seqHeader').css('color','black');
      Seq.find('.material-icons').html("remove");
      Seq.find('.material-icons').toggleClass("blue-grey lighten-1","blue darken-3");
    }
  }

  setupOnClick() {
    $('.sequencing').click(this.toggleSelected);
  }

  toggleSelected(event)  {
    var Seq = $(this);
    if(Seq.find('.material-icons').html() == "add")  {
      Seq.css('border','2px solid steelblue');
      Seq.find('.seqHeader').css('color','black');
      Seq.find('.material-icons').html("remove");
      Seq.find('.material-icons').toggleClass("blue-grey lighten-1","blue darken-3");
    }
    else if(Seq.find('.material-icons').html() == "remove")  {
      Seq.find('.seqHeader').css('color','gray');
      Seq.css('border','none');
      Seq.find('.material-icons').html("add");
      Seq.find('.material-icons').toggleClass("blue-grey lighten-1","blue darken-3");
    }
  }

  render() {
    return (
      <div className="row">

        <div className="col s2 push-s2 sequencing selectIsNo" onClick={this.context.sequencingChoice} id="GermlineExomeDNA">
          <div className="seqBoxTop">
            <p className="seqHeader">Germline</p>
            <p>Exome DNA sequencing</p>
          </div>
          <div className="buttonWrapper">
            <a className="btn-floating waves-effect waves-light blue darken-3"><i className="material-icons">add</i></a>
          </div>
        </div>

        <div className="col s2 push-s3 sequencing selectIsNo" onClick={this.context.sequencingChoice} id="TumorExomeDNA">
          <div className="seqBoxTop">
            <p className="seqHeader">Tumor</p>
            <p>Exome DNA sequencing</p>
          </div>
          <div className="buttonWrapper">
            <a className="btn-floating waves-effect waves-light blue darken-3"><i className="material-icons">add</i></a>
          </div>
        </div>

        <div className="col s2 push-s4 sequencing selectIsNo" onClick={this.context.sequencingChoice} id="TumorTranscriptome">
          <div className="seqBoxTop">
            <p className="seqHeader">Tumor</p>
            <p>Transcriptome sequencing</p>
          </div>
          <div className="buttonWrapper">
            <a className="btn-floating waves-effect waves-light blue darken-3"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    );
  }
}

SequencingInput.contextTypes = {
  sequencingChoice: PropTypes.func,
  seqInfo: PropTypes.object
}

export default SequencingInput;
