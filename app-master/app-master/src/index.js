import React from "react";
import { render } from "react-dom";
import './index.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = { showMessage: false };
  }

  _showMessage = bool => {
    this.setState({
      showMessage: bool
    });
  };

  render() {
    return (
      <div className="whatever">
        <button onClick={this._showMessage.bind(null, true)} id="circle1">
          <span id="one">ADD TOPICS</span>
        </button>
        <button onClick={this._showMessage.bind(null, true)} id="circle2">
          <span id="two">FORUM</span>
        </button>
        {this.state.showMessage && (
          <form className="form1">
            <label>
              Topic
              <input type="text" name="name" />
            </label>
            <br/>
            <label>
              Issue
              <input type="text" name="name" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        )}
      
        {this.state.showMessage && (
          <form className="form2">
            <label>
              Forum
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Issue
              <input type="text" name="name" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }
}




render(<App />, document.getElementById("container"));
