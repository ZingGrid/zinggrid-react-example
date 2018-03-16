import React, { Component } from 'react';

class ReadOnly extends Component {
    render() {
      return (
        <zing-grid data={this.props.datastore}></zing-grid>
      )
    }
  }
export default ReadOnly;