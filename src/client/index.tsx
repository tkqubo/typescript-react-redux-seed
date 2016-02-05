'use strict';
import * as React from 'react';
import {Component} from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProp {
  name: string;
}

class HelloReact extends Component<HelloProp, {}> {
  render(): JSX.Element {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloReact name="React" />,
  document.getElementById('content')
);

