import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
    return (
        <footer className="chatbar">
        <input className="chatbar-username" onKeyPress={this.props.userOnSubmit} placeholder="Please enter Username" />
        <input className="chatbar-message" onKeyPress={this.props.onSubmit} placeholder="Type a message and hit ENTER" />
    </footer>
    );
  }
  
}
export default ChatBar;