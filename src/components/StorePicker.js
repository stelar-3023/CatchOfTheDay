import React, { Component } from "react";
import { getFunName } from "../helpers"

class StorePicker extends Component {
  myInput = React.createRef();

  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    // 1. stop the form from submitting
    event.preventDefault();
    console.log(this.myInput)
    // 2. get the text from that input

    // 3. Change the page to /store/whatever-they-entered
    console.log("Going to store")
  }
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input ref={this.myInput} type="text" name="" id="" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store <span role="img" aria-label="visit-store">➡️</span></button>
      </form>
    )
  }
}

export default StorePicker;
