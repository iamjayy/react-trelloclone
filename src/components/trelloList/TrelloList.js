import React from "react";
import TrelloCard from "../trelloCard/TrelloCard";
// import { CardActions, Card } from "@material-ui/core";

const TrelloList = ({ title, cards }) => {
  const styles = {
    container: {
      backgroundColor: "#ccc",
      borderRadius: 3,
      width: 300,
      padding: 8,
      marginRight: 8
    }
  };

  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map(card => (
        <TrelloCard text={card.text} />
      ))}
    </div>
  );
};

export default TrelloList;
