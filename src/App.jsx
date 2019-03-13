import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }

  onSubmit (evt) {
    console.log("event on submit", evt.key)
    if (evt.key !== "Enter") return;
    const newMessage = {
      id:(Math.random() * (5000 - 5) + 5),
      username: this.state.currentUser.name,
      content: evt.target.value
    }
    console.log("newmessage", newMessage)
    const concatenator = this.state.messages.concat(newMessage)
    this.setState({
      messages : concatenator})
  }

  render() {
    return (

        <div>
          <Navbar/>
          <MessageList theMessageList={ this.state.messages }/>
          <ChatBar currentUser={ this.state.currentUser } newMessage={this.newMessage} onSubmit={this.onSubmit}/>
        </div>
    );
  }
}

export default App;