import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class Methods extends Component {
    constructor(props) {
      super(props);
      this.state = {
        datastore: `[
  { "breed": "Chow Chow", "name": "Butter"},
  { "breed": "Dachshund", "name": "Sousage"},
  { "breed": "Pug", "name": "Potat"},
  { "breed": "Corgi", "name": "Plop"},
  { "breed": "Pomeranian", "name": "Floof"}
]`,
        pager: false,
        cText: undefined,
        selected: 0
      }
      
      this.cInput = null;
      this.grid = null;
      this.textarea = null;
      
  
      this.setPager = this.setPager.bind(this);
      this.setCaption = this.setCaption.bind(this);
      this.setData = this.setData.bind(this);
    }
  
    render() {
      return ( 
        <div>
          <zing-grid ref={(grid) => { this.grid = grid }} editor data={this.state.datastore} ></zing-grid>
          <br/>
          <label htmlFor="pagerBox">Pager</label>
          <input id="pagerBox" type="checkbox" checked={this.state.pager} onChange={this.setPager} />
          <input ref={(input) => { this.cInput = input }} type="text" placeholder="Caption"/>
          <button onClick={this.setCaption}>Set Caption</button><br/><br/>
          <textarea ref={(ta) => { this.textarea = ta }} name="ds" cols="50" rows="8"></textarea>
          <br/>
          <button id="cdBtn" onClick={this.setData}>Set Data</button>
          
          
        </div>   
      )
    }

    componentDidMount() {
        this.textarea.value = this.state.datastore;
       
    }

    handleEvent = (event) => { // changes to grid data will change data store
        this.setState({ datastore: JSON.stringify(this.grid.data) });
    }
  
    setData() {
      this.grid.setData(JSON.parse(this.textarea.value));
    }
  

  
    setPager() {
      this.grid.setPager(!this.state.pager);
      this.setState({ pager: !this.state.pager });
    }
  
    setCaption() {
      this.grid.setCaption(this.cInput.value);
      this.setState({ cText: this.cInput.value });
      
    }
  }
  export default Methods;