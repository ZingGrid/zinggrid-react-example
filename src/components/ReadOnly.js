import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class ReadOnly extends Component {

    constructor(props) {
      super(props);
      // define variables
      this.datastore = [
        [1,2,3], 
        [4,5,6]
      ];
      // define state data
      this.state = {
        // model for binding theme attribute grid
        theme: 'default',
      };
      // define event handlers
      this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    // assign data on mount
    componentDidMount() {
      this.refs.firstGrid.setData(this.datastore);
    }

    // toggle theme attribute on grid
    handleThemeChange(e) {
      this.setState({theme: e.target.value});
    }

    render() {
      return (
        <div>
          <zing-grid
            ref="firstGrid"
            caption="Hello World"
            theme={this.state.theme}>
            <zg-colgroup>
              <zg-column index="0" header="Column 1"></zg-column>
              <zg-column index="1" header="Column 2"></zg-column>
              <zg-column index="2" header="Column 3"></zg-column>
            </zg-colgroup>
          </zing-grid>
      
          <br></br>
          <hr></hr>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="default">Default</option>
            <option value="android">Android</option>
            <option value="ios">IOS</option>
            <option value="dark">Dark</option>
            <option value="black">Black</option>
          </select>
        </div>
      )
    }
  }
export default ReadOnly;