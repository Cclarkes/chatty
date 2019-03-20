Chatty App
=====================

A minimal and simple IM chat-room app reminiscent of the OG MSN messenger or IRC.
Currently pretty bare-bones as far as styling goes, standby for some QOL and CSS changes.

### Usage

Clone the repo,install the dependencies (from both the main project folder, and the server folder) and start both the app and the server.
Bear in mind that ./chatty_server/server.js needs to be started independently of the main app.

```
git clone <ssh link> <name for folder>
npm install
<<Then, start the server from the server folder with 'Node server.js'>>
<<Navigate back to main project folder with cd ../>>
npm start
open http://localhost:3000
```

### Screenshot

!["Screenshot of Chatty Client"](https://github.com/Cclarkes/chatty/blob/master/Screenshot.png)


### Dependencies

* React + React Dom
* Sass
* ESLint
* Webpack
* SockJS Client
* Style Loader
* babel-loader
* webpack-dev-server
