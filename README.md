# redux-sockets ![BuildStatus](https://travis-ci.org/SharonGrossman/redux-sockets.svg?branch=master)

## Install
```
npm install --save-dev redux-sockets
```

## Description
* A simple module to help simplify the integration of [socket.io](https://socket.io)
 with your [redux](http://redux.js.org/docs/introduction/) application
* Emits client actions to the server if a `socket` payload is presented
* Initializes socketio connection and handles connection actions to the server and client
* Listens to any socket event using `socketio-wildcard`
and dispatches the event to the client in the form of `server/ACTION_TYPE`

## Usage
The module exports a middleware and a reducer

### middleware
Add the middleware to the applyMiddleware function upon redux store initialization

```
import socketIoMiddleware from 'redux-sockets';
...
return createStore(
  ...
  applyMiddleware(socketIoMiddleware(), ...middlewares)
);
```
### reducer
Simply import and add the reducer to your other reducers
```
import {combineReducers} from 'redux';
import {reducer as socket} from 'redux-sockets';
...
export default combineReducers({
  ...
  socket
});
```

The module also exports the action ``` socketConnect``` ,
and action types ``` CONNECT, CONNECTED, DISCONNECTED```

## Why not [redux-socket.io](https://github.com/itaylor/redux-socket.io)?
redux-socket.io is great for capturing events from the server but I wanted more control
over the received actions and create a connection on demand (emitting a CONNECT action)
Also, with redux-socket.io you could only capture a single event name. 
This module captures all sorts of events.

## License

[MIT](LICENSE) © [Sharon Grossman](https://github.com/sharongrossman)