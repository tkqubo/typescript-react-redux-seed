'use strict';
import * as Redux from 'redux';
import * as React from 'react';
import { connect } from 'react-redux';

import * as greeting from '../redux/modules/greeting';

export interface AppProp {
  name: string;
  dispatch?: Redux.Dispatch;
  greeting?: greeting.GreetingAction;
}

@connect(state => state)
export class App extends React.Component<AppProp, {}> {
  handleButton(): void {
    this.props.dispatch(greeting.greetInTheAfternoon('Bob'));
  }

  render(): JSX.Element {
    console.dir(this.props);
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>
          <button onClick={this.handleButton.bind(this)}>Greet</button>
        </div>
        <div>{this.props.greeting.message}</div>
      </div>
  );
  }
}
