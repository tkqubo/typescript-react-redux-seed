'use strict';
/* tslint:disable */
require('./HttpRequestExample.styl');
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import {Button, Panel} from 'react-bootstrap';
/* tslint:enable */

import {RootState, tags, Requestable} from '../../../redux/index';

interface HttpRequestExampleProps extends ReactRouter.RouteComponentProps<{}, {}>, tags.TagActionCreator {
  tags?: Requestable<tags.Tag[]>;
}

@ReactRedux.connect(
  (state: RootState) => state,
  (dispatch: Redux.Dispatch) => Redux.bindActionCreators(tags.tagActionCreator, dispatch)
)
export class HttpRequestExample extends React.Component<HttpRequestExampleProps, {}> {
  handleListTags(): void {
    this.props.getTags();
  }

  render(): JSX.Element {
    let tags = this.props.tags.payload ?
      this.props.tags.payload.map(tag =>
        <li key={tag.name}>
          <b>{tag.name}</b>: <small>{tag.description}</small>
        </li>
      )
      : <li><i>loading...</i></li>;
    return (
      <div className='HttpRequestExample'>
        <h4>HTTP Request Example</h4>
        <Button bsStyle='primary' onClick={this.handleListTags.bind(this)}>List tags</Button>
        <Panel className='HttpRequestExample-tagResult'>
          <ul>
            {tags}
          </ul>
        </Panel>
      </div>
    );
  }
}
