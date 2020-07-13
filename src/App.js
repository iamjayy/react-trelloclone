import React, { Component } from "react";
import TrelloList from "../src/components/trelloList/TrelloList";
import { connect } from "react-redux";
// import { StylesContext } from "@material-ui/styles";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Trello</h2>
        <div style={style.listContainer}>
          {lists.map(list => (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const style = {
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
