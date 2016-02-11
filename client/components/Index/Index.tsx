'use strict';
/* tslint:disable */
import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import {
  Panel,
  Well,
  Label,
  ButtonToolbar,
  ButtonGroup,
  Button,
  DropdownButton,
  SplitButton,
  MenuItem,
  Input,
  ButtonInput,
  Glyphicon,
  ProgressBar,
  Badge,
  Alert,
  Accordion,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
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
    const innerCheckbox = <input type='checkbox' aria-label='...' />;
    return (
      <div className='Index'>
        <h4>Index</h4>
        <Well>
          <h4>Buttons</h4>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle='primary'>Primary</Button>
            <Button bsStyle='success'>Success</Button>
            <Button bsStyle='info'>Info</Button>
            <Button bsStyle='warning'>Warning</Button>
            <Button bsStyle='danger'>Danger</Button>
            <Button bsStyle='link'>Link</Button>
            <ButtonGroup>
              <Button>Button</Button>
              <Button disabled>Disabled</Button>
              <Button active>Active</Button>
            </ButtonGroup>
            <Button bsSize='xsmall'>xsmall</Button>
          </ButtonToolbar>
        </Well>

        <Well>
          <h4>Dropdowns</h4>
          <DropdownButton title='DropdownButton' id={'1'}>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Action</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='3'>Action</MenuItem>
          </DropdownButton>
          {' '}
          <SplitButton title='SplitButton' id={'2'}>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Action</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='3'>Action</MenuItem>
          </SplitButton>
        </Well>

        <Well>
          <h4>Labels</h4>
          <Label bsStyle='default'>Default</Label>&nbsp;
          <Label bsStyle='primary'>Primary</Label>&nbsp;
          <Label bsStyle='success'>Success</Label>&nbsp;
          <Label bsStyle='info'>Info</Label>&nbsp;
          <Label bsStyle='warning'>Warning</Label>&nbsp;
          <Label bsStyle='danger'>Danger</Label>
        </Well>

        <Well>
          <h4>Forms</h4>
          <Panel>
            <h5>Forms</h5>
            <form>
              <Input type='text' label='Text' placeholder='Enter text' />
              <Input type='text' label='Danger' bsStyle='warning' addonBefore={innerCheckbox} />
              <Input type='checkbox' label='Checkbox' checked readOnly />
              <Input type='radio' label='Radio' checked readOnly />
              <Input type='select' label='Select' placeholder='select'>
                <option value='select'>select</option>
                <option value='other'>...</option>
              </Input>
              <ButtonInput type='submit' value='Submit Button' />
            </form>
          </Panel>

          <Panel>
            <h5>Horizontal Forms</h5>
            <form className='form-horizontal'>
              <Input type='text' label='Text' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
              <Input type='textarea' label='Textarea' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
              <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-10' help='Offset is applied to wrapper.' />
            </form>
          </Panel>
        </Well>

        <Well>
          <h4>Misc.</h4>
          <p>Badges <Badge>42</Badge></p>
          <ProgressBar bsStyle='success' now={40} label='%(percent)s%' />
          <Alert bsStyle='warning'>
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>

        </Well>

        <Accordion>
          <Panel header='Glyphicons' eventKey='1'>
          <ButtonToolbar>
            <ButtonGroup>
              <Button><Glyphicon glyph='asterisk' /></Button>
              <Button><Glyphicon glyph='plus' /></Button>
              <Button><Glyphicon glyph='euro' /></Button>
              <Button><Glyphicon glyph='eur' /></Button>
              <Button><Glyphicon glyph='minus' /></Button>
              <Button><Glyphicon glyph='cloud' /></Button>
              <Button><Glyphicon glyph='envelope' /></Button>
              <Button><Glyphicon glyph='pencil' /></Button>
              <Button><Glyphicon glyph='glass' /></Button>
              <Button><Glyphicon glyph='music' /></Button>
              <Button><Glyphicon glyph='search' /></Button>
              <Button><Glyphicon glyph='heart' /></Button>
              <Button><Glyphicon glyph='star' /></Button>
              <Button><Glyphicon glyph='star-empty' /></Button>
              <Button><Glyphicon glyph='user' /></Button>
              <Button><Glyphicon glyph='film' /></Button>
              <Button><Glyphicon glyph='th-large' /></Button>
              <Button><Glyphicon glyph='th' /></Button>
              <Button><Glyphicon glyph='th-list' /></Button>
              <Button><Glyphicon glyph='ok' /></Button>
              <Button><Glyphicon glyph='remove' /></Button>
              <Button><Glyphicon glyph='zoom-in' /></Button>
              <Button><Glyphicon glyph='zoom-out' /></Button>
              <Button><Glyphicon glyph='off' /></Button>
              <Button><Glyphicon glyph='signal' /></Button>
              <Button><Glyphicon glyph='cog' /></Button>
              <Button><Glyphicon glyph='trash' /></Button>
              <Button><Glyphicon glyph='home' /></Button>
              <Button><Glyphicon glyph='file' /></Button>
              <Button><Glyphicon glyph='time' /></Button>
              <Button><Glyphicon glyph='road' /></Button>
              <Button><Glyphicon glyph='download-alt' /></Button>
              <Button><Glyphicon glyph='download' /></Button>
              <Button><Glyphicon glyph='upload' /></Button>
              <Button><Glyphicon glyph='inbox' /></Button>
              <Button><Glyphicon glyph='play-circle' /></Button>
              <Button><Glyphicon glyph='repeat' /></Button>
              <Button><Glyphicon glyph='refresh' /></Button>
              <Button><Glyphicon glyph='list-alt' /></Button>
              <Button><Glyphicon glyph='lock' /></Button>
              <Button><Glyphicon glyph='flag' /></Button>
              <Button><Glyphicon glyph='headphones' /></Button>
              <Button><Glyphicon glyph='volume-off' /></Button>
              <Button><Glyphicon glyph='volume-down' /></Button>
              <Button><Glyphicon glyph='volume-up' /></Button>
              <Button><Glyphicon glyph='qrcode' /></Button>
              <Button><Glyphicon glyph='barcode' /></Button>
              <Button><Glyphicon glyph='tag' /></Button>
              <Button><Glyphicon glyph='tags' /></Button>
              <Button><Glyphicon glyph='book' /></Button>
              <Button><Glyphicon glyph='bookmark' /></Button>
              <Button><Glyphicon glyph='print' /></Button>
              <Button><Glyphicon glyph='camera' /></Button>
              <Button><Glyphicon glyph='font' /></Button>
              <Button><Glyphicon glyph='bold' /></Button>
              <Button><Glyphicon glyph='italic' /></Button>
              <Button><Glyphicon glyph='text-height' /></Button>
              <Button><Glyphicon glyph='text-width' /></Button>
              <Button><Glyphicon glyph='align-left' /></Button>
              <Button><Glyphicon glyph='align-center' /></Button>
              <Button><Glyphicon glyph='align-right' /></Button>
              <Button><Glyphicon glyph='align-justify' /></Button>
              <Button><Glyphicon glyph='list' /></Button>
              <Button><Glyphicon glyph='indent-left' /></Button>
              <Button><Glyphicon glyph='indent-right' /></Button>
              <Button><Glyphicon glyph='facetime-video' /></Button>
              <Button><Glyphicon glyph='picture' /></Button>
              <Button><Glyphicon glyph='map-marker' /></Button>
              <Button><Glyphicon glyph='adjust' /></Button>
              <Button><Glyphicon glyph='tint' /></Button>
              <Button><Glyphicon glyph='edit' /></Button>
              <Button><Glyphicon glyph='share' /></Button>
              <Button><Glyphicon glyph='check' /></Button>
              <Button><Glyphicon glyph='move' /></Button>
              <Button><Glyphicon glyph='step-backward' /></Button>
              <Button><Glyphicon glyph='fast-backward' /></Button>
              <Button><Glyphicon glyph='backward' /></Button>
              <Button><Glyphicon glyph='play' /></Button>
              <Button><Glyphicon glyph='pause' /></Button>
              <Button><Glyphicon glyph='stop' /></Button>
              <Button><Glyphicon glyph='forward' /></Button>
              <Button><Glyphicon glyph='fast-forward' /></Button>
              <Button><Glyphicon glyph='step-forward' /></Button>
              <Button><Glyphicon glyph='eject' /></Button>
              <Button><Glyphicon glyph='chevron-left' /></Button>
              <Button><Glyphicon glyph='chevron-right' /></Button>
              <Button><Glyphicon glyph='plus-sign' /></Button>
              <Button><Glyphicon glyph='minus-sign' /></Button>
              <Button><Glyphicon glyph='remove-sign' /></Button>
              <Button><Glyphicon glyph='ok-sign' /></Button>
              <Button><Glyphicon glyph='question-sign' /></Button>
              <Button><Glyphicon glyph='info-sign' /></Button>
              <Button><Glyphicon glyph='screenshot' /></Button>
              <Button><Glyphicon glyph='remove-circle' /></Button>
              <Button><Glyphicon glyph='ok-circle' /></Button>
              <Button><Glyphicon glyph='ban-circle' /></Button>
              <Button><Glyphicon glyph='arrow-left' /></Button>
              <Button><Glyphicon glyph='arrow-right' /></Button>
              <Button><Glyphicon glyph='arrow-up' /></Button>
              <Button><Glyphicon glyph='arrow-down' /></Button>
              <Button><Glyphicon glyph='share-alt' /></Button>
              <Button><Glyphicon glyph='resize-full' /></Button>
              <Button><Glyphicon glyph='resize-small' /></Button>
              <Button><Glyphicon glyph='exclamation-sign' /></Button>
              <Button><Glyphicon glyph='gift' /></Button>
              <Button><Glyphicon glyph='leaf' /></Button>
              <Button><Glyphicon glyph='fire' /></Button>
              <Button><Glyphicon glyph='eye-open' /></Button>
              <Button><Glyphicon glyph='eye-close' /></Button>
              <Button><Glyphicon glyph='warning-sign' /></Button>
              <Button><Glyphicon glyph='plane' /></Button>
              <Button><Glyphicon glyph='calendar' /></Button>
              <Button><Glyphicon glyph='random' /></Button>
              <Button><Glyphicon glyph='comment' /></Button>
              <Button><Glyphicon glyph='magnet' /></Button>
              <Button><Glyphicon glyph='chevron-up' /></Button>
              <Button><Glyphicon glyph='chevron-down' /></Button>
              <Button><Glyphicon glyph='retweet' /></Button>
              <Button><Glyphicon glyph='shopping-cart' /></Button>
              <Button><Glyphicon glyph='folder-close' /></Button>
              <Button><Glyphicon glyph='folder-open' /></Button>
              <Button><Glyphicon glyph='resize-vertical' /></Button>
              <Button><Glyphicon glyph='resize-horizontal' /></Button>
              <Button><Glyphicon glyph='hdd' /></Button>
              <Button><Glyphicon glyph='bullhorn' /></Button>
              <Button><Glyphicon glyph='bell' /></Button>
              <Button><Glyphicon glyph='certificate' /></Button>
              <Button><Glyphicon glyph='thumbs-up' /></Button>
              <Button><Glyphicon glyph='thumbs-down' /></Button>
              <Button><Glyphicon glyph='hand-right' /></Button>
              <Button><Glyphicon glyph='hand-left' /></Button>
              <Button><Glyphicon glyph='hand-up' /></Button>
              <Button><Glyphicon glyph='hand-down' /></Button>
              <Button><Glyphicon glyph='circle-arrow-right' /></Button>
              <Button><Glyphicon glyph='circle-arrow-left' /></Button>
              <Button><Glyphicon glyph='circle-arrow-up' /></Button>
              <Button><Glyphicon glyph='circle-arrow-down' /></Button>
              <Button><Glyphicon glyph='globe' /></Button>
              <Button><Glyphicon glyph='wrench' /></Button>
              <Button><Glyphicon glyph='tasks' /></Button>
              <Button><Glyphicon glyph='filter' /></Button>
              <Button><Glyphicon glyph='briefcase' /></Button>
              <Button><Glyphicon glyph='fullscreen' /></Button>
              <Button><Glyphicon glyph='dashboard' /></Button>
              <Button><Glyphicon glyph='paperclip' /></Button>
              <Button><Glyphicon glyph='heart-empty' /></Button>
              <Button><Glyphicon glyph='link' /></Button>
              <Button><Glyphicon glyph='phone' /></Button>
              <Button><Glyphicon glyph='pushpin' /></Button>
              <Button><Glyphicon glyph='usd' /></Button>
              <Button><Glyphicon glyph='gbp' /></Button>
              <Button><Glyphicon glyph='sort' /></Button>
              <Button><Glyphicon glyph='sort-by-alphabet' /></Button>
              <Button><Glyphicon glyph='sort-by-alphabet-alt' /></Button>
              <Button><Glyphicon glyph='sort-by-order' /></Button>
              <Button><Glyphicon glyph='sort-by-order-alt' /></Button>
              <Button><Glyphicon glyph='sort-by-attributes' /></Button>
              <Button><Glyphicon glyph='sort-by-attributes-alt' /></Button>
              <Button><Glyphicon glyph='unchecked' /></Button>
              <Button><Glyphicon glyph='expand' /></Button>
              <Button><Glyphicon glyph='collapse-down' /></Button>
              <Button><Glyphicon glyph='collapse-up' /></Button>
              <Button><Glyphicon glyph='log-in' /></Button>
              <Button><Glyphicon glyph='flash' /></Button>
              <Button><Glyphicon glyph='log-out' /></Button>
              <Button><Glyphicon glyph='new-window' /></Button>
              <Button><Glyphicon glyph='record' /></Button>
              <Button><Glyphicon glyph='save' /></Button>
              <Button><Glyphicon glyph='open' /></Button>
              <Button><Glyphicon glyph='saved' /></Button>
              <Button><Glyphicon glyph='import' /></Button>
              <Button><Glyphicon glyph='export' /></Button>
              <Button><Glyphicon glyph='send' /></Button>
              <Button><Glyphicon glyph='floppy-disk' /></Button>
              <Button><Glyphicon glyph='floppy-saved' /></Button>
              <Button><Glyphicon glyph='floppy-remove' /></Button>
              <Button><Glyphicon glyph='floppy-save' /></Button>
              <Button><Glyphicon glyph='floppy-open' /></Button>
              <Button><Glyphicon glyph='credit-card' /></Button>
              <Button><Glyphicon glyph='transfer' /></Button>
              <Button><Glyphicon glyph='cutlery' /></Button>
              <Button><Glyphicon glyph='header' /></Button>
              <Button><Glyphicon glyph='compressed' /></Button>
              <Button><Glyphicon glyph='earphone' /></Button>
              <Button><Glyphicon glyph='phone-alt' /></Button>
              <Button><Glyphicon glyph='tower' /></Button>
              <Button><Glyphicon glyph='stats' /></Button>
              <Button><Glyphicon glyph='sd-video' /></Button>
              <Button><Glyphicon glyph='hd-video' /></Button>
              <Button><Glyphicon glyph='subtitles' /></Button>
              <Button><Glyphicon glyph='sound-stereo' /></Button>
              <Button><Glyphicon glyph='sound-dolby' /></Button>
              <Button><Glyphicon glyph='sound-5-1' /></Button>
              <Button><Glyphicon glyph='sound-6-1' /></Button>
              <Button><Glyphicon glyph='sound-7-1' /></Button>
              <Button><Glyphicon glyph='copyright-mark' /></Button>
              <Button><Glyphicon glyph='registration-mark' /></Button>
              <Button><Glyphicon glyph='cloud-download' /></Button>
              <Button><Glyphicon glyph='cloud-upload' /></Button>
              <Button><Glyphicon glyph='tree-conifer' /></Button>
              <Button><Glyphicon glyph='tree-deciduous' /></Button>
              <Button><Glyphicon glyph='cd' /></Button>
              <Button><Glyphicon glyph='save-file' /></Button>
              <Button><Glyphicon glyph='open-file' /></Button>
              <Button><Glyphicon glyph='level-up' /></Button>
              <Button><Glyphicon glyph='copy' /></Button>
              <Button><Glyphicon glyph='paste' /></Button>
              <Button><Glyphicon glyph='alert' /></Button>
              <Button><Glyphicon glyph='equalizer' /></Button>
              <Button><Glyphicon glyph='king' /></Button>
              <Button><Glyphicon glyph='queen' /></Button>
              <Button><Glyphicon glyph='pawn' /></Button>
              <Button><Glyphicon glyph='bishop' /></Button>
              <Button><Glyphicon glyph='knight' /></Button>
              <Button><Glyphicon glyph='baby-formula' /></Button>
              <Button><Glyphicon glyph='tent' /></Button>
              <Button><Glyphicon glyph='blackboard' /></Button>
              <Button><Glyphicon glyph='bed' /></Button>
              <Button><Glyphicon glyph='apple' /></Button>
              <Button><Glyphicon glyph='erase' /></Button>
              <Button><Glyphicon glyph='hourglass' /></Button>
              <Button><Glyphicon glyph='lamp' /></Button>
              <Button><Glyphicon glyph='duplicate' /></Button>
              <Button><Glyphicon glyph='piggy-bank' /></Button>
              <Button><Glyphicon glyph='scissors' /></Button>
              <Button><Glyphicon glyph='bitcoin' /></Button>
              <Button><Glyphicon glyph='btc' /></Button>
              <Button><Glyphicon glyph='xbt' /></Button>
              <Button><Glyphicon glyph='yen' /></Button>
              <Button><Glyphicon glyph='jpy' /></Button>
              <Button><Glyphicon glyph='ruble' /></Button>
              <Button><Glyphicon glyph='rub' /></Button>
              <Button><Glyphicon glyph='scale' /></Button>
              <Button><Glyphicon glyph='ice-lolly' /></Button>
              <Button><Glyphicon glyph='ice-lolly-tasted' /></Button>
              <Button><Glyphicon glyph='education' /></Button>
              <Button><Glyphicon glyph='option-horizontal' /></Button>
              <Button><Glyphicon glyph='option-vertical' /></Button>
              <Button><Glyphicon glyph='menu-hamburger' /></Button>
              <Button><Glyphicon glyph='modal-window' /></Button>
              <Button><Glyphicon glyph='oil' /></Button>
              <Button><Glyphicon glyph='grain' /></Button>
              <Button><Glyphicon glyph='sunglasses' /></Button>
              <Button><Glyphicon glyph='text-size' /></Button>
              <Button><Glyphicon glyph='text-color' /></Button>
              <Button><Glyphicon glyph='text-background' /></Button>
              <Button><Glyphicon glyph='object-align-top' /></Button>
              <Button><Glyphicon glyph='object-align-bottom' /></Button>
              <Button><Glyphicon glyph='object-align-horizontal' /></Button>
              <Button><Glyphicon glyph='object-align-left' /></Button>
              <Button><Glyphicon glyph='object-align-vertical' /></Button>
              <Button><Glyphicon glyph='object-align-right' /></Button>
              <Button><Glyphicon glyph='triangle-right' /></Button>
              <Button><Glyphicon glyph='triangle-left' /></Button>
              <Button><Glyphicon glyph='triangle-bottom' /></Button>
              <Button><Glyphicon glyph='triangle-top' /></Button>
              <Button><Glyphicon glyph='console' /></Button>
              <Button><Glyphicon glyph='superscript' /></Button>
              <Button><Glyphicon glyph='subscript' /></Button>
              <Button><Glyphicon glyph='menu-left' /></Button>
              <Button><Glyphicon glyph='menu-right' /></Button>
              <Button><Glyphicon glyph='menu-down' /></Button>
              <Button><Glyphicon glyph='menu-up' /></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Panel>
        </Accordion>
      </div>
    );
  }

}
