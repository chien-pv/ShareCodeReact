import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';


class Display extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
}


class Label extends React.Component {
  render() {
    return (
      <Display color={this.props.color}
               num={this.props.num}
               size={this.props.size}/>
    );
  }
}


class Shirt extends React.Component {
  render() {
    return (
      <div>
        <Label
           color={this.props.color4}
            num={this.props.num}
            size={this.props.size}/>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Shirt color4="steelblue" num="3.14" size="medium" />
  </div>,
  document.getElementById('root')
);
