import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          {
            "firstName": "John",
            "lastName": "Doe",
            "age": 45
          },
          {
            "firstName": "Jane",
            "lastName": "Doe",
            "age": 44
          },
        ],
        [
          {
            "firstName": "John Jr.",
            "lastName": "Doe",
            "age": 15
          },
          {
            "firstName": "Jane Jr.",
            "lastName": "Doe",
            "age": 13
          }
        ]
      ],
      changedData: [],
    }

    this.change = this.change.bind(this);
  }

  componentDidMount() {
    let data = [
      {
        "firstName": "John",
        "lastName": "Doe",
        "age": 45
      },
      {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 44
      },
      {
        "firstName": "John Jr.",
        "lastName": "Doe",
        "age": 15
      },
      {
        "firstName": "Jane Jr.",
        "lastName": "Doe",
        "age": 13
      }
    ]

    this.setState({
      changedData: JSON.stringify(data)
    })
  }

  change() {
    let randomizeDataIndex = Math.floor(Math.random() * 2);

    this.setState({
      changedData: JSON.stringify(this.state.data[randomizeDataIndex])
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.change}>Data Change</button>
        <zing-grid
          caption="ZingGrid React"
          pager
          pageSize="5"
          data={this.state.changedData}
        >
        </zing-grid>
      </div>
    );
  }
}

export default App;
