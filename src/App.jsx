import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    const socket = new WebSocket('ws://localhost:3001');
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      webSocket: socket,
      currentUser: {name: 'Bob'},
      messages: []
    }
  }

componentDidMount() {
  let socket = this.state.webSocket;
  socket.onopen = function () {
    console.log('Client Connected')
  }

  socket.onmessage = (event) => {
    const outsideMessage = JSON.parse(event.data);
    this.setState({
      messages : this.state.messages.concat(outsideMessage)
    })
  }
}



  onSubmit (evt) {
    if (evt.key !== "Enter") return;
    const newMessage = {
      id:(Math.random() * (5000 - 5) + 5),
      username: this.state.currentUser.name,
      content: evt.target.value
    }
    const concatenator = this.state.messages.concat(newMessage)
    this.setState({
      messages : concatenator})
    
    this.state.webSocket.send(JSON.stringify(newMessage))
  }

  render() {
    return (

        <div>
          <Navbar/>
          <MessageList theMessageList={ this.state.messages }/>
          <ChatBar currentUser={ this.state.currentUser }
            webSocket={this.state.webSocket}
            newMessage={this.newMessage}
            onSubmit={this.onSubmit}/>
        </div>
    );
  }
}

export default App;