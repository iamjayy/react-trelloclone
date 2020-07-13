import React from "react";
import TrelloCard from "../trelloCard/TrelloCard";

const TrelloList = ({ title }) => {
  const styles = {
    container: {
      backgroundColor: "#ccc",
      borderRadius: 3,
      width: 300,
      padding: 8
    }
  };

  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <TrelloCard />
    </div>
  );
};

export default TrelloList;
