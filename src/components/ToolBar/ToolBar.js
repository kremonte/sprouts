import React, { Component, PropTypes } from 'react';
import styles from './ToolBar.scss';

export default class ToolBar extends Component {
  render() {
    return (
      <div className="ToolBar">
        {this.props.items.map((item, i) => {
          if(item === 'divider') {
            return <div className="ToolBar-divider" />;
          } else {
            return (
              <button key={item.text + i} onClick={item.onClick}>{item.text}</button>
            );
          }
        })}
      </div>
    );
  }
}

ToolBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        onClick: PropTypes.func,
        text: PropTypes.string,
      })
    ])
  ).isRequired
};
