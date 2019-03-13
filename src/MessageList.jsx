import React, {Component} from 'react';
import Message, {MessageNotifications} from './Message.jsx';

class MessageList extends Component {
    render() {
        let messages = this.props.theMessageList.map((message, index) => {
            return <Message key={index} content={message} />
        })
    return(
        <main className="messages">
        {messages}
          <MessageNotifications/>
        </main>
    )}
}

export default MessageList;