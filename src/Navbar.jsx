import React, {Component} from 'react';

class NavBar extends Component {
    render() {
    return(
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="user-counter">Users Online: {this.props.usersOnline}</p>
        </nav>
    )}
}

export default NavBar;