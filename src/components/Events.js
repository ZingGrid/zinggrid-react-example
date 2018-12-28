import React, { Component } from 'react';
import ZingGrid from 'zinggrid';

class Events extends Component {
    constructor(props) {
        super(props);
        this.grid = null; 
        this.eventLog = null; 
        this.eventText = "";
    }
    
    render() {
      return (
        <div>
            <zing-grid ref={(grid) => { this.grid = grid }} id="eventGrid" caption="Events" pager page-size="3"></zing-grid><br />
    
            <h3>Event Log</h3>
            <div ref={(eventLog) => { this.eventLog = eventLog }} id="eventLog" className="wordwrap"></div>
        </div>
      )
    }

    componentDidMount() {
        this.grid.data = `[
            {"name": "Kevin", "age": "22"},
            {"name": "Joe", "age": "40"},
            {"name": "Liz", "age": "25"},
            {"name": "Tim", "age": "24"},
            {"name": "Ron", "age": "30"},
            {"name": "Jane", "age": "31"}
          ]`;
          
        let events = ['grid:ready', 'cell:click', 'header:click', 'grid:pagechange'];
        for (var i = 0; i < events.length; i++) {
            this.grid.addEventListener(events[i], this.handleEvent.bind(this));
        }
       
    }

    handleEvent = (event) => {
        if (event.detail.ZGTarget && event.detail.ZGData) {
            this.eventText += `${event.type} from ${event.detail.ZGTarget.localName}<br>`;
            this.eventText += `${JSON.stringify(event.detail.ZGData)}<br><br>`;
          } else if (event.detail.ZGData) {
            this.eventText += `${event.type} from zing-grid <br>`;
            this.eventText += `${JSON.stringify(event.detail.ZGData)}<br><br>`;
          } else {
            console.log(event.type + ' from zing-grid');
            this.eventText += `${event.type} from zing-grid <br><br>`;
          }
          this.eventLog.innerHTML = this.eventText;
        }
  }

    
export default Events;