import React, { Component } from "react";
import "./css/Ajax.css";
import ZingGrid from "zinggrid";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: undefined,
      json2: undefined,
      defaultColumns: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // toggle datasets
  handleClick() {
    this.setState({
      defaultColumns: !this.state.defaultColumns
    });
  }

  render() {
    return (
      <div>
        <p>
          You can dynamically render <code>zg-column</code>s in your code and
          ZingGrid will automatically pick up the mutation and adjust the layout
          of columns being displayed. This is good for adjusting a single grid
          with multiple datasets. If you have a new dataset, you will want new
          columns.
        </p>
        <button onClick={this.handleClick}>
          Toggle
          {this.state.defaultColumns ? " Second " : " First "}
          Dataset
        </button>
        <zing-grid
          ref={grid => {
            this.grid = grid;
          }}
          data={this.state.defaultColumns ? this.state.json : this.state.json2}
          caption={this.state.defaultColumns ? "Shows" : "Shows 2"}
          editor
          loading
          layout="row"
          viewport-stop
        >
          {this.state.defaultColumns ? (
            <zg-colgroup>
              <zg-column index="title" />
              <zg-column index="genre" />
            </zg-colgroup>
          ) : (
            <zg-colgroup>
              <zg-column index="titleChanged" />
              <zg-column index="genreChanged" />
            </zg-colgroup>
          )}
        </zing-grid>
      </div>
    );
  }

  componentDidMount() {
    // fetch the default dataset
    fetch("./shows.json")
      .then(res => res.json())
      .then(
        result => {
          // purposely timeout so the loading screen displays longer
          setTimeout(() => {
            this.setState({
              json: JSON.stringify(result.shows)
            });
          }, 2000);
        },
        error => {
          console.log(error);
        }
      );
    // fetch second set
    fetch("./shows2.json")
      .then(res => res.json())
      .then(
        result => {
          // purposely timeout so the loading screen displays longer
          this.setState({
            json2: JSON.stringify(result.shows)
          });
        },
        error => {
          console.log(error);
        }
      );
  }
}
export default ConditionalRendering;
