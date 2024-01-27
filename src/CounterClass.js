import React, { Component } from "react";

class CounterAppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={this.increment}
            style={{ maxWidth: "80px", width: "100%" }}
          >
            Increment
          </button>
          <button
            onClick={this.decrement}
            style={{ maxWidth: "80px", width: "100%" }}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default CounterAppClass;
