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

    // this.state = {
    //   panelOpen: false
    // }

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    const { actions, slidePanel } = this.props;
    // this.setState({
    //   panelOpen: !this.state.panelOpen
    // })
    actions.toggleSlidePanel(!slidePanel.slidePanelOpen)
  }

  render() {
    return (
      <main>
        <SlidePanel
          MasterComponent={<Table togglePanel={this.togglePanel} />}
          SlideComponent={<TestSlideComponent />}
          panelOpen={this.props.slidePanel.slidePanelOpen}
          toggleFn={this.props.actions.toggleSlidePanel}
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
