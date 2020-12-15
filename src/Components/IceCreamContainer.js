import React from "react";
import { buyIceCream } from "../Redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div className="container">
      <h1 className="title">Icecream Redux with connect HOC</h1>
      <div className="devider" />
      <h2>Number of Ice Creams - {props.numberOfIceCreeams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfIceCreeams: state.iceCream.numberOfIceCreeams,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    buyIceCream: () => dispath(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
