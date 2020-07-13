import React, { Component } from "react";
import TrelloList from "../src/components/trelloList/TrelloList";

class App extends Component {
  render() {
    return (
      <div>
        <TrelloList title="test" />
      </div>
    );
  }
}

export default App;
