'use strict';
import * as React from 'react';
import * as ReactRouter from 'react-router';
import {Link} from 'react-router';

interface DetailsProps extends ReactRouter.RouteComponentProps<{}, {}> {
}

export class Details extends React.Component<DetailsProps, {}> {
  handleBack(): void {
    this.props.history.goBack();
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Detail page</h1>
        <div>
          <a href='#' onClick={this.handleBack.bind(this)}>Back</a>
          <hr />
          <Link to='/'>Index</Link>
        </div>
      </div>
    );
  }
}
