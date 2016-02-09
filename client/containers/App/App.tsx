'use strict';
/* tslint:disable */
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
/* tslint:enable */

import {Header, Menu} from '../../components/index';
import {RootState} from '../../redux/modules/index';

@ReactRedux.connect(
  (state: RootState) => state
)
export class App extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>Hello TypeScript, React and Redux</PageHeader>
              <Row>
                <Col xs={3}>
                  <Menu history={this.props.history} />
                </Col>
                <Col xs={9}>
                  {this.props.children}
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
