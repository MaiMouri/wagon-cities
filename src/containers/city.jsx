import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { selectCity } from "../actions";

class City extends Component {
  handleClick = () => {
    // REDUX ACTION
    this.props.selectCity(this.props.city);
  }
  render() {
    let classes = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      classes += " selected";
    }
    return (
      <li className="list-group-item"
          onClick={this.handleClick}>
        {this.props.city.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch);
}

// function mapReduxStateToProps(reduxState) {
//   return {
//     selectedCity: reduxState.selectedCity
//   };
// }
export default connect(null, mapDispatchToProps)(City);
