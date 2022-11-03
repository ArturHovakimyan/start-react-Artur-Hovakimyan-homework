import React from "react";

class Count extends React.Component {
  render() {
    return (
      <>
        {this.props.cards.map((card) => (
          <p key={card.id}>
            Card number {card.id} unmounted {Math.ceil(card.count / 2)}{" "}
            {card.count <= 2 ? "time" : "times"}
          </p>
        ))}
      </>
    );
  }
}
export default Count;
