'use strict';
import * as Redux from 'redux';
import * as React from 'react';
import {connect} from 'react-redux';
import * as greeting from '../redux/modules/greeting';

export interface AppProp extends greeting.GreetingActionCreator {
  title?: string;
  greeting?: greeting.Greeting;
}

@connect(
  (state: AppProp) => state,
  (dispatch: Redux.Dispatch) => Redux.bindActionCreators(greeting.greetingActionCreator, dispatch)
)
export class App extends React.Component<AppProp, {}> {
  handleButton(): void {
    this.props.greetInTheMorningAsync('Bob');
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <button onClick={this.handleButton.bind(this)}>Greet to Bob in the morning</button>
        </div>
        <h2>{this.props.greeting.message}</h2>
      </div>
    );
  }
}
