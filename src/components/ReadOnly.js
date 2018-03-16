import React, { Component } from 'react';

class ReadOnly extends Component {
    constructor(props) {
        super(props);
        this.datastore = "[[1,2,3], [4,5,6]]"
    }
    render() {
      return (
        <zing-grid data={this.datastore}></zing-grid>
      )
    }
  }
export default ReadOnly;