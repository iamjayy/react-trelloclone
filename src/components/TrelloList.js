import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ListContainer = styled.div`
  background: #dfe3e6;
  border-radius: 3px;
  margin-right: 8px;
  padding: 8px;
  height: 100%;
  width: 300px;
`;

const TrelloList = ({ id, title, cards, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(id)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>

                {cards.map(({ id: cardId, text }, index) => (
                  <TrelloCard
                    key={cardId}
                    text={text}
                    id={cardId}
                    index={index}
                  />
                ))}

                <TrelloActionButton listId={id} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default TrelloList;
