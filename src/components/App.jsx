import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Table from "./Table/Table";
import SlidePanel from './SlidePanel/SlidePanel';
import TestSlideComponent from './TestSlideComponent/TestSlideComponent';
import "../scss/app.scss";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      panelOpen: false
    }

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      panelOpen: !this.state.panelOpen
    })
  }

  render() {
    const { panelOpen } = this.state;

    return (
      <main>
        <SlidePanel
          MasterComponent={() => <Table togglePanel={this.togglePanel} />}
          SlideComponent={() => <TestSlideComponent />}
          panelOpen={panelOpen}
        />
      </main>
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
