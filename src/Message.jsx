import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    switch(this.props.content.type) {
      case 'incomingMessage':
      return(
        <div className='message'>
          <span className='message-username'>{this.props.content.username}</span>
          <span className='message-content'>{this.props.content.content}</span>
        </div>)
          break;
      case 'incomingNotification':
      return(
        <div className='message system'>
          <span className='message-content'>{this.props.content.content}</span>
        </div>)
          break;
  }
  }
}