import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class OneWayBinding extends Component {
    constructor(props) {
      super(props);
      this.state = {
        datastore: [
          // dataset 1
          [
            [1,2,3], 
            [4,5,6]
          ],
          // dataset 2
          [
            { "breed": "Chow Chow", "name": "Butter"},
            { "breed": "Dachshund", "name": "Sousage"},
            { "breed": "Pug", "name": "Potat"},
            { "breed": "Corgi", "name": "Plop"},
            { "breed": "Pomeranian", "name": "Floof"}
          ]
        ],
        pagerOn: true,
        captionText: 'Change Me Please!',
        dataIndex: 1,
        theme: 'default',
        stringData: ''
      };
      
      this.cInput = null;
      this.grid = null;
  
      // define event handlers
      this.handleTextareaChange = this.handleTextareaChange.bind(this);
      this.handlePagerChange = this.handlePagerChange.bind(this);
      this.handleCaptionChange = this.handleCaptionChange.bind(this);
      this.handleChangeData = this.handleChangeData.bind(this);
      this.handleThemeChange = this.handleThemeChange.bind(this);
    }
  
    // assign data on load
    componentDidMount() {
      this.stringifyData();
    }

    // method to stringify data for grid
    stringifyData() {
      this.setState({ stringData: JSON.stringify(this.state.datastore[this.state.dataIndex]) });
    }

    // handle toggling of datasets
    handleChangeData() {
      let newDataIndex = 0;
      // toggle dataset variable and trigger watch change for grid data
      if (this.state.dataIndex === 0) newDataIndex = 1;

      this.setState({ dataIndex: newDataIndex });
      this.stringifyData(); 
    }

    // handling textarea manipulation of data
    handleTextareaChange(e) {
      this.setState({ stringData: e.target.value });
    }

    // handle toggling of pager
    handlePagerChange(e) {
      this.setState({ pagerOn: e.target.checked });
    }

    // handle caption change
    handleCaptionChange(e) {
      this.setState({ captionText: e.target.value });
    }

    // handle toggling of theme attribute on grid
    handleThemeChange(e) {
      this.setState({ theme: e.target.value });
    }

    render() {
      return ( 
        <div>
          <zing-grid
            ref="oneWayGrid"
            caption={this.state.captionText}
            data={this.state.stringData}
            pager={this.state.pagerOn}
            theme={this.state.theme}
            page-size="5"
            page-size-options="2,5,15,25,50">
          </zing-grid>

          <br></br>

          <h3>Stored Data</h3>
          <p>Paste your JSON data here</p>
          <textarea name="ds" cols="50" rows="8" 
            value={this.state.stringData} onChange={this.handleTextareaChange}></textarea>
          <br></br>

          <label htmlFor="pager-toggle">Toggle Pager</label>
          <input id="pager-toggle" type="checkbox" 
            checked={this.state.pagerOn} onChange={this.handlePagerChange}></input>

          <br></br>
          <label>Change Data</label>
          <button id="cdBtn" onClick={this.handleChangeData}>Toggle Datasets</button>
          <br></br>

          <label htmlFor="caption-text">Change Caption</label>
          <input id="caption-text" type="text" placeholder="Caption" 
            value={this.state.captionText} onChange={this.handleCaptionChange}></input>

          <br></br>
          <label htmlFor="theme-text">Change Theme</label>
          <select id="theme-text"value={this.state.theme} onChange={this.handleThemeChange}>
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
  export default OneWayBinding;