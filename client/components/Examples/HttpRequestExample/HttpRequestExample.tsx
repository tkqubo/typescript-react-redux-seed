'use strict';
/* tslint:disable */
require('./HttpRequestExample.styl');
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import {Button, Panel} from 'react-bootstrap';
/* tslint:enable */

import {RootState} from '../../../redux/modules/index';
import * as tags from '../../../redux/modules/tags';

interface HttpRequestExampleProps extends ReactRouter.RouteComponentProps<{}, {}>, tags.TagActionCreator {
  tags?: tags.Tag[];
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
    let tags = this.props.tags.map(tag =>
      <li key={tag.name}>
        <b>{tag.name}</b>: <small>{tag.description}</small>
      </li>
    );
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
