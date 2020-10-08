import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="buttonContainer">
        <Link
          to={this.props.path}
          className="btn effect04"
          data-sm-link-text="CLICK"
        >
          <span>{this.props.text}</span>
        </Link>
      </div>
    );
  }
}
export default Button;
