import React, { Component } from 'react';
import './css/Ajax.css';
import ZingGrid from 'zinggrid';

class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: undefined
        }
    }
    
    render() {
      return (
        <div>
          <zing-grid ref={(grid) => { this.grid = grid }} data={this.state.json} 
            caption="Shows" 
            editor
            loading>
          </zing-grid>
        </div>
      )
    }

    componentDidMount() {
      const _this = this;
      fetch('./shows.json')
        .then(res => res.json())
        .then(
          (result) => {
            // purposely timeout so the loading screen displays longer
            setTimeout(() => {
              this.setState({
                json: JSON.stringify(result.shows)
              })
            }, 2000);
          },
          (error) => { console.log(error)}
        )
    }

  }
export default Ajax;