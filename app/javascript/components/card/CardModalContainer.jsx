import React, { Component } from "react";
import { connect } from "react-redux";

import CardModal from "./CardModal";
import * as actions from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    card: state.cards.find(card => card.id === id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return {
    onFetchCard: () => {
      dispatch(actions.fetchCard(id));
    }
  };
};

class CardModalContainer extends Component {
  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    console.log(this.props.card);
    if (this.props.card) {
      return <CardModal card={this.props.card} />;
    }
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardModalContainer);
