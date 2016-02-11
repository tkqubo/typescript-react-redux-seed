'use strict';
/* tslint:disable */
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
/* tslint:enable */

import {RootState, greeting} from '../../redux/index';

interface IndexProps extends ReactRouter.RouteComponentProps<{}, {}>, greeting.GreetingActionCreator {
  title?: string;
  greeting?: greeting.Greeting;
}

@ReactRedux.connect(
  (state: RootState) => state,
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
      <div className='Index'>
        <h4>Index</h4>
      </div>
    );
  }

}
