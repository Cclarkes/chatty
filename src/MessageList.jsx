import React, {Component} from 'react';
import Message from './Message.jsx';
import { IncomingMessage } from 'http';

class MessageList extends Component {
    render() {
        let messages = this.props.theMessageList.map((message, index) => {
        return <Message key={index} content={message} />
        })
    return(
        <main className="messages">
        {messages}
        </main>
    )}
}

export default MessageList;