import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2 style={{ textAlign: "center" }}>Trello Clone with Reactjs</h2>

        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map(({ id, title, cards }, index) => (
                <TrelloList
                  key={id}
                  id={id}
                  title={title}
                  cards={cards}
                  index={index}
                />
              ))}

              <TrelloActionButton list />
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
