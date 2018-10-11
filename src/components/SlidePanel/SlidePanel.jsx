import React, { PureComponent } from 'react'
import classnames from 'classnames';
import './slidePanel.scss';

const ToggleBtn = ({ panelOpen, toggleFn }) => {
  function clickHandler() {
    toggleFn(!panelOpen);
  }

  return (
    <button
      className="slide-panel__close-btn"
      type="button"
      aria-expanded={panelOpen}
      onClick={clickHandler}
    >
      Close
    </button>
  )
}

export default class SlidePanel extends PureComponent {
  render() {
    const { MasterComponent, SlideComponent, panelOpen, toggleFn } = this.props;

    return (
      <section className="slide-panel">
        {MasterComponent}
        <div className={
          classnames({
            "slide-panel__panel": true,
            "slide-panel__panel--open": panelOpen
          })
        }>
          <ToggleBtn panelOpen={panelOpen} toggleFn={toggleFn} />
          {SlideComponent}
        </div>
      </section>
    )
  }
}
