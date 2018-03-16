import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadOnly from './components/ReadOnly';
import DataChange from './components/DataChange';
import Events from './components/Events';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'default',
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

  updateGridTheme = (e) => {
    let newThemeValue = e.target.value;

    this.setState({
      theme: newThemeValue
    });
  }

  updateGridData = () => {
    let randomizeDataIndex = Math.floor(Math.random() * 2);

    this.setState({
      changedData: JSON.stringify(this.state.data[randomizeDataIndex])
    })
  }

  render() {
    return (
      <div className="App">
        <select onChange={this.updateGridTheme}>
          <option value="default">Default</option>
          <option value="android">Android</option>
          <option value="ios">IOS</option>
        </select>
        <button onClick={this.updateGridData}>Data Change</button>
        <zing-grid
          theme={this.state.theme}
          caption="ZingGrid React"
          pager
          pageSize="5"
          data={this.state.changedData}
        >
        </zing-grid>
        <ReadOnly datastore="[[1,2,3], [4,5,6]]" />
        <DataChange/>
        <Events/>
      </div>
    );
  }
}

export default App;
