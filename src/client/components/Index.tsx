'use strict';
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRouter from 'react-router';
import * as ReactRedux from 'react-redux';
import * as greeting from '../redux/modules/greeting';

interface IndexProps extends ReactRouter.RouteComponentProps<{}, {}>, greeting.GreetingActionCreator {
  title?: string;
  greeting?: greeting.Greeting;
}

@ReactRedux.connect(
  (state: IndexProps) => state,
  (dispatch: Redux.Dispatch) => Redux.bindActionCreators(greeting.greetingActionCreator, dispatch)
)
export class Index extends React.Component<IndexProps, {}> {
  handleButton(): void {
    this.props.greetInTheMorningAsync('Bob');
  }

  handleMove(): void {
    this.props.history.push('/details');
  }

  render(): JSX.Element {
    return (
      <div>
        <button onClick={this.handleButton.bind(this)}>Greet to Bob in the morning</button>
        <h2>{this.props.greeting.message}</h2>
        <hr />
        <button onClick={this.handleMove.bind(this)}>To the details</button>
      </div>
    );
  }

}
