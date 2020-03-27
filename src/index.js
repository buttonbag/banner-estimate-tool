import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Component } from 'react';
// import App from './App';

class App extends Component {
  render(){
    return(
      <div>
        <h1>HTML5 Ad Estimator</h1>
          <form>
            <div>
              {/* how many sets of ads total? how many sizes per set */} 
              Number of sets: <input type="text"/>
            </div>
            <div>
              Number of sizes per set: <input type="text"/>
            </div>
            <div>
              {/* how many ads in total? */}
              Ads in total: <div className="ads-total">TOTAL</div>
            </div>

            {/* initial ad takes the longest ~2 days including bug fixes */}

            {/* 5 ad units per 1 day */}

            
            {/* make the very first 300x250 for approval we would need maybe 2-3 days. 
            
            Once that is approved, we need 1 more day to create the other 4 300x250s for approval.
            
            Another 3 days to resize the other 15.
            
            IR of first 300x250 - 3 days 
            IR of all 5 300z250s - 1 day 
            Review remaining 15 - 3 days 
            
            Total time 7 days - not including time waiting for feedback */}
          
        </form>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.getElementById('root') );