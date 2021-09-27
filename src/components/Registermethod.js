import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class RegisterRenderer extends Component {

    constructor(props) {
      super(props);
      // define variables
      this.datastore = [
        { "first": "Maria", "last": "John", "number": 123 },
        { "first": "David", "last": "Smith", "number": 456 },
        { "first": "Felicity", "last": "Snow", "number": 789 }
      ];
      
      // define method
      this.customRenderer = this.customRenderer.bind(this);
    }

    // assign data on mount
    componentDidMount() {
      this.refs.firstGrid.setData(this.datastore);

      // Register method
      ZingGrid.registerMethod(this.customRenderer, 'customRenderer');
    }

    // toggle theme attribute on grid
    customRenderer(text) {
      return text.toUpperCase();
    }

    render() {
      return (
        <div>
          <zing-grid
            ref="firstGrid"
            caption="Hello World">
            <zg-colgroup>
              <zg-column index="first" header="Column 1" renderer="customRenderer"></zg-column>
              <zg-column index="last" header="Column 2"></zg-column>
              <zg-column index="number" header="Column 3"></zg-column>
            </zg-colgroup>
          </zing-grid>
        </div>
      )
    }
  }
export default RegisterRenderer;