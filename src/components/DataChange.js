import React, { Component } from 'react';

class DataChange extends Component {
    constructor(props) {
      super(props);
      this.state = {
        datastore: "[[1,2,3], [4,5,6]]",
        pager: false,
        cText: undefined,
        selected: 0
      }
      
      this.cInput;
      this.grid;
  
      this.textareaChange = this.textareaChange.bind(this);
      this.pagerChange = this.pagerChange.bind(this);
      this.captionChange = this.captionChange.bind(this);
      this.changeData = this.changeData.bind(this);
    }
  
    render() {
      return ( 
        <div>
          <zing-grid ref={(grid) => { this.grid = grid }} caption={this.state.cText} data={this.state.datastore} editor pager={this.state.pager}></zing-grid>
          <br/>
          <h3>Stored Data</h3>
          <textarea name="ds" cols="50" rows="8" value={this.state.datastore} onChange={this.textareaChange}></textarea>
          <br/><br/>
  
          <input type="checkbox" checked={this.state.pager} onChange={this.pagerChange} />
  
          <button id="cdBtn" onClick={this.changeData}>Change Data</button>
          <input ref={(input) => { this.cInput = input }} type="text" placeholder="Caption" value={this.state.cText}/>
          <button onClick={this.captionChange}>Set Caption</button>
        </div>   
      )
    }

    componentDidMount() {
        let events = ['data:cellchange'];
        for (var i = 0; i < events.length; i++) {
            this.grid.addEventListener(events[i], this.handleEvent.bind(this));
        }
       
    }

    handleEvent = (event) => { // changes to grid data will change data store
        this.setState({ datastore: JSON.stringify(this.grid.data) });
    }
  
    changeData() {
     if (this.state.selected == 0) {
        this.setState({ datastore: `[
          { "breed": "Chow Chow", "name": "Butter"},
          { "breed": "Dachshund", "name": "Sousage"},
          { "breed": "Pug", "name": "Potat"},
          { "breed": "Corgi", "name": "Plop"},
          { "breed": "Pomeranian", "name": "Floof"}
        ]`, selected: 1}); 
      }
      else {
        this.setState({ datastore: "[[1,2,3], [4,5,6]]", selected: 0}); 
      }
    }
  
    textareaChange(event) {
      this.setState({ datastore: event.target.value });
    }
  
    pagerChange() {
      this.setState({ pager: !this.state.pager });
    }
  
    captionChange() {
      this.setState({ cText: this.cInput.value });
    }
  }
  export default DataChange;