import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class TwoWayBinding extends Component {
  constructor(props) {
    super(props);
    
    // define data
    this.state = {
      // fake datastore
      datastore : [
          { "breed": "Cane Corso", "name": "Ziva"},
          { "breed": "Dachshund", "name": "Rick"},
          { "breed": "Corgi", "name": "Phillis"},
          { "breed": "Pomeranian", "name": "Koda"}
      ],
      // model for binding data attribute to grid
       stringData: '',
    };
    
    // define event handlers
    this.handleDataChange = this.handleDataChange.bind(this);
  }
  
  componentDidMount() {
    this.stringifyData();
    // assign editor callback to catch data updates
    // full row edit 
    this.refs.demoGrid.addEventListener('data:recordchange', this.dataChanged.bind(this));
    // single cell change (double click cell)
    this.refs.demoGrid.addEventListener('data:cellchange', this.dataChanged.bind(this));
    // row insert
    this.refs.demoGrid.addEventListener('data:recordinsert', this.dataInsert.bind(this));
    // row delete
    this.refs.demoGrid.addEventListener('data:recorddelete', this.dataDelete.bind(this));
  }
   
   // manager store updates
  dataChanged(e) {
    console.log(`--- data:changed fired ---`, e.detail);

    let rowIndex = e.detail.ZGData.rowIndex;
    let newValues = {
      breed: e.detail.ZGData.data.breed,
      name: e.detail.ZGData.data.name
    };

    // update the object in datastore at the correct
    // array position
    // eg) currentDataSet['name'] = 'new value'
    // let datastore = JSON.parse(JSON.stringify( this.state.datastore));
    let datastore = [...this.state.datastore];
    datastore[rowIndex] = newValues;
    this.setState({datastore: datastore});
    this.stringifyData();
  }

  // manage inserting rows to store
  dataInsert(e) {        
    console.log(`--- data:insert fired ---`, e.detail);
    let newValues = {
      breed: e.detail.ZGData.data.breed,
      name: e.detail.ZGData.data.name,
    };
    // push record to our array
    let datastore = [...this.state.datastore];
    datastore.push(newValues);
    this.setState({datastore});
    this.stringifyData();
  }

  // manage deleting rows to store
  dataDelete(e) {        
    console.log(`--- data:delete fired ---`, e);
    let recordIndex = e.detail.ZGData.data.nOriginalIndex;
    // filter deleted row from datastore containing array of objects
    let datastore = [...this.state.datastore];
    datastore = datastore.filter((ele, index) => index != recordIndex);
    this.setState({datastore});
    this.stringifyData();
  }

  // update store data for textarea input and grid
  stringifyData() {
    this.setState({stringData:JSON.stringify(this.state.datastore)});
    // alternatively can use API to set data. We chose
    // to show off attribute binding first
    // this.$refs.demoGrid.setData(this.datastore);
  }
  
  // handle textarea data changes
  handleDataChange(e) {
    // update state for input
    this.setState({stringData: e.target.value});
    // update store
    this.setState({datastore: JSON.parse(e.target.value)});
  }
  
  render() {
    return (
      <div>
        <zing-grid
          ref="demoGrid"
          caption="Two Way Data Binding (right click on cells for context menu options)"
          context-menu
          editor
          editor-controls
          layout-controls
          search
          sorter
          pager
          page-size="5"
          page-size-options="2,5,15"
          data={this.state.stringData}
          theme={this.state.theme}>
        </zing-grid>
        <br></br>
        <h3>Edit Store Data</h3>
        <p>Edit current JSON or copy paste your <b>JSON</b> data here:</p>
        <textarea name="ds" cols="50" rows="8" value={this.state.stringData} onChange={this.handleDataChange}></textarea>
      </div>
    );
  }
}
export default TwoWayBinding;