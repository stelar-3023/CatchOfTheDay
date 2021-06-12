import React, { Component } from "react";

class StorePicker extends Component {
  render() {
    return (
        <form action="" className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" name="" id="" required placeholder="Store Name" />
          <button type="submit">Visit Store <span role="img" aria-label="visit-store">➡️</span></button>
        </form>
    )
  }
}

export default StorePicker;
