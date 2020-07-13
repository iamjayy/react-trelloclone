import React from "react";
import Icon from "@material-ui/core/Icon";

class TrelloActionButton extends React.Component {
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add Another List" : "Add another Card";

    return (
      <div>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    return this.renderAddButton();
  }
}

export default TrelloActionButton;
