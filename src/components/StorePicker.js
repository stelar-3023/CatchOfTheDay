import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object,
  };
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          ref={this.myInput}
          type="text"
          name=""
          id=""
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">
          Visit Store{" "}
          <span role="img" aria-label="visit-store">
            ➡️
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
