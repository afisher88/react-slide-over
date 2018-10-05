import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Table from "./Table/Table";
import "../scss/app.scss";
class App extends React.Component {
  render() {
    return (
      <section>
        <Table />
      </section>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     animalList: state.animalList,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(animalActions, dispatch)
//   }
// }

export default connect()(App);
