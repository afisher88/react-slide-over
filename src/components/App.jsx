import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as slidePanelActions from '../actions/slidePanel.actions';
import Table from "./Table/Table";
import SlidePanel from './SlidePanel/SlidePanel';
import TestSlideComponent from './TestSlideComponent/TestSlideComponent';
import "../scss/app.scss";
class App extends React.Component {
  constructor() {
    super();

    // Used with togglePanelState
    this.state = {
      panelOpen: false
    }

    this.togglePanelState = this.togglePanelState.bind(this);
    this.togglePanelRedux = this.togglePanelRedux.bind(this);
  }

  // Alternative to togglePanelRedux
  togglePanelState() {
    this.setState({
      panelOpen: !this.state.panelOpen
    })
  }

  togglePanelRedux() {
    const { actions, slidePanel } = this.props;

    actions.toggleSlidePanel(!slidePanel.slidePanelOpen)
  }

  render() {
    return (
      <main>
        <SlidePanel
          MasterComponent={<Table togglePanel={this.togglePanelRedux} />}
          SlideComponent={<TestSlideComponent />}
          panelOpen={this.props.slidePanel.slidePanelOpen}
          toggleFn={this.togglePanelRedux}
        />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    slidePanel: state.slidePanel,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(slidePanelActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
