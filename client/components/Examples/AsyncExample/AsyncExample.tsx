'use strict';
/* tslint:disable */
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import {Button} from 'react-bootstrap';
/* tslint:enable */

import {RootState} from '../../../redux/modules/index';
import * as greeting from '../../../redux/modules/greeting';

interface AsyncExampleProps extends ReactRouter.RouteComponentProps<{}, {}>, greeting.GreetingActionCreator {
  title?: string;
  greeting?: greeting.Greeting;
}

@ReactRedux.connect(
  (state: RootState) => state,
  (dispatch: Redux.Dispatch) => Redux.bindActionCreators(greeting.greetingActionCreator, dispatch)
)
export class AsyncExample extends React.Component<AsyncExampleProps, {}> {
  handleButton(): void {
    this.props.greetInTheMorningAsync('Bob');
  }

  render(): JSX.Element {
    return (
      <div>
        <h4>Async Example</h4>
        <Button bsStyle='primary' onClick={this.handleButton.bind(this)}>Greet to Bob</Button>
        <h3>{this.props.greeting.message}</h3>
      </div>
    );
  }
}
