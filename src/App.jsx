import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';
import { IncomingMessage } from 'http';

class App extends Component {
  constructor(props) {
    super(props);
    const socket = new WebSocket('ws://localhost:3001');
    this.onSubmit = this.onSubmit.bind(this);
    this.userOnSubmit = this.userOnSubmit.bind(this);
    this.state = {
      webSocket: socket,
      currentUser: {name: 'Anonymous'},
      messages: [],
      usersOnline: 0
    }
  }

componentDidMount() {
  let socket = this.state.webSocket;
  socket.onopen = function () {
    console.log('Client Connected')
  }

  socket.onmessage = (event) => {
    const outsideMessage = JSON.parse(event.data);
    switch(outsideMessage.type) {
      case 'incomingMessage':
    return this.setState({
      messages : this.state.messages.concat(outsideMessage)
    })
    break;
      case 'incomingNotification':
      return this.setState({
        messages : this.state.messages.concat(outsideMessage)
      })
      break;
      case 'userCount':
    return this.setState({
      usersOnline : outsideMessage.users
    })
    break;
  };
  };
};

userOnSubmit (evt) {
  const newUser = evt.target.value;
  if (evt.key !== 'Enter') return;
  const newNotification = {
    username: 'System:',
    content: `User ${this.state.currentUser.name} has changed their name to ${evt.target.value}.`,
    type: 'incomingNotification'
  }
  this.state.webSocket.send(JSON.stringify(newNotification))
  this.setState({
    currentUser : {name : newUser}
  })
}

  onSubmit (evt) {
    if (evt.key !== 'Enter') return;
    const newMessage = {
      username: this.state.currentUser.name,
      content: evt.target.value,
      type: 'incomingMessage'
    }
    this.state.webSocket.send(JSON.stringify(newMessage))
    evt.target.value = null;
  }

  render() {
    return (
        <div>
          <Navbar usersOnline={ this.state.usersOnline }/>
          <h2>Welcome to Chatty App!</h2>
          <MessageList theMessageList={ this.state.messages }/>
          <ChatBar currentUser={ this.state.currentUser }
            webSocket={ this.state.webSocket }
            newMessage={ this.newMessage }
            onSubmit={ this.onSubmit }
            userOnSubmit={ this.userOnSubmit }/>
        </div>
    );
  }
}

export default App;