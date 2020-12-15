import React from "react";
import { buyCake } from "../Redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div className="container">
      <h1 className="title">Cake Redux with connect HOC</h1>
      <div className="devider" />
      <h2>Number of cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    buyCake: () => dispath(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
