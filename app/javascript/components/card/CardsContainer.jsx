import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

class CardsContainer extends React.Component {
  render() {
    const cards = this.props.cards
      .filter(card => card.list_id === Number(this.props.listId))
      .map(card => <Card key={card.id} card={card} />);
    return (
      <div id="cards-container" data-id={`list-${this.props.listId}-cards`}>
        {cards}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CardsContainer);
