import React from "react";
import { scrollIDIntoViewHelper } from "../../utils/utils";
import { AutoGrowingTextArea } from "../AutoGrowingTextArea";
import { InputWithMovingChangingLabel } from "../InputWithMovingLabel";
import { TwoRangeInput } from "../TwoRangeInput";
import './style.css';


export class Query extends React.Component {
  render() {
    return <div className="container query__container">


      <div className="query__header">
        <h1>Word Inventorier</h1>
        <h4>Setup Text</h4>
      </div>


      <div className="query__body">
        <div className="query-input">
          <AutoGrowingTextArea />
        </div>
        <div className="query-controls">

          <div className="query-summary">
            <h3>Query Summary</h3>
            <span>Analyse Text on the left</span>
            <span>Retrieve Top 10 most frequent words</span>
            <span>With lengths between 10 and 30</span>
          </div>

          <TwoRangeInput rangeLow={0} rangeHigh={100}/>
          <InputWithMovingChangingLabel />

          <a className="btn btn--text-icon" href="/" onClick={evt => scrollIDIntoViewHelper("results", evt)}> 
            <i className="fas fa-cloud-upload-alt"></i>
            <span className="btn__text">Submit</span>    
          </a> 

        </div>
        
      </div>
    </div>;
  }
}