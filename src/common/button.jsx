import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const {width } = this.props
    return (
      <div className="buttonContainer" style={{width:width}}>
        <Link
          to={this.props.path}
          className="btn effect04"
          data-sm-link-text="PRZEJDŹ"
        >
          <span>{this.props.text}</span>
        </Link>
      </div>
    );
  }
}
export default Button;
