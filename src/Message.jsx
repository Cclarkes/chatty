import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    return(
      <div className='message'>
        <span className='message-username'>{this.props.content.username}</span>
        <span className='message-content'>{this.props.content.content}</span>
      </div>
    )
  }
}

export class MessageNotifications extends Component {
  render() {
    return(
      <span className='message system'>Anonymous1 changed their name to nomnom.</span>
    )
  }
}