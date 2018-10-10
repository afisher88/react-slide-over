import React, { PureComponent } from 'react'
import classnames from 'classnames';
import './slidePanel.scss';

export default class SlidePanel extends PureComponent {
  render() {
    const { MasterComponent, SlideComponent, panelOpen } = this.props;

    return (
      <section className="slide-panel">
        <MasterComponent />
        <div className={
          classnames({
            "slide-panel__panel": true,
            "slide-panel__panel--open": panelOpen
          })
        }>
          <button className="slide-panel__close-btn" type="button" aria-expanded={panelOpen}>Close</button>
          <SlideComponent />
        </div>
      </section>
    )
  }
}
