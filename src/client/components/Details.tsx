'use strict';
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRouter from 'react-router';
import * as ReactRedux from 'react-redux';
import {Link} from 'react-router';

import {RootState} from '../redux/modules/index';
import * as tags from '../redux/modules/tags';

interface DetailsProps extends ReactRouter.RouteComponentProps<{}, {}>, tags.TagActionCreator {
  tags?: tags.Tag[];
}

@ReactRedux.connect(
  (state: RootState) => state,
  (dispatch: Redux.Dispatch) => Redux.bindActionCreators(tags.tagActionCreator, dispatch)
)
export class Details extends React.Component<DetailsProps, {}> {
  handleBack(): void {
    this.props.history.goBack();
  }

  handleGetLanguages(): void {
    this.props.getTags();
  }

  render(): JSX.Element {
    let tags = this.props.tags.map(tag => <li key={tag.name}><b>{tag.name}</b>: <small>{tag.description}</small></li>);
    return (
      <div>
        <h2>Detail</h2>
        <div>
          <a href='#' onClick={this.handleBack.bind(this)}>Back</a>
          <hr />
          <Link to='/'>Index</Link>
          <hr />
          <h3>HTTP request example</h3>
          <button onClick={this.handleGetLanguages.bind(this)}>List items</button>
          <ul>
            {tags}
          </ul>
        </div>
      </div>
    );
  }
}
