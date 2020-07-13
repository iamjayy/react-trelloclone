import React from "react";
import TrelloCard from "../trelloCard/TrelloCard";
// import { CardActions, Card } from "@material-ui/core";
import TrelloActionButton from "../trelloActionButton/TrelloActionButton";

const TrelloList = ({ title, cards }) => {
  const styles = {
    container: {
      backgroundColor: "#dfe3e6",
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
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton />
    </div>
  );
};

export default TrelloList;
