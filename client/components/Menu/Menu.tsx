'use strict';
/* tslint:disable */
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
/* tslint:enable */

import {RootState} from '../../redux/modules/index';

@ReactRedux.connect(
  (state: RootState) => state
)
export class Menu extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
  handleIndex(): void {
    this.props.history.push('/');
  }

  handleAsyncExample(): void {
    this.props.history.push('/async-example');
  }

  handleHttpRequestExample(): void {
    this.props.history.push('/http-request-example');
  }

  render(): JSX.Element {
    return (
      <div>
        <h3>Menu</h3>
        <ListGroup>
          <ListGroupItem onClick={this.handleIndex.bind(this)}>Index</ListGroupItem>
          <ListGroupItem onClick={this.handleAsyncExample.bind(this)}>Async Example</ListGroupItem>
          <ListGroupItem onClick={this.handleHttpRequestExample.bind(this)}>HTTP Request Example</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
