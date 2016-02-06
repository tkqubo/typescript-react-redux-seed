'use strict';
import * as React from 'react';
import * as ReactRouter from 'react-router';

export class App extends React.Component<ReactRouter.RouteComponentProps<{}, {}>, {}> {
  private border: any = {border: 'solid #eee'};
  render(): JSX.Element {
    return (
      <div>
        <h1>Hello Redux</h1>
        <div style={this.border}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
