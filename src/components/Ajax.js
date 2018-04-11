import React, { Component } from 'react';

class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: undefined
        }
    }
    
    render() {
      return (
        <zing-grid ref={(grid) => { this.grid = grid }} editor data={this.state.json}></zing-grid>
      )
    }

    componentDidMount() {
        fetch('./shows.json')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                json: JSON.stringify(result.shows)
              })
            },
            (error) => { console.log(error)}
          )
    }

  }
export default Ajax;