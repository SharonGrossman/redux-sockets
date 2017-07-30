# redux-sockets

## Install
```
npm install --save-dev redux-sockets
```

## Usage
The module exports a middleware and a reducer

### middleware
Add the middleware to the applyMiddleware function upon redux store initialization

```
import socketIoMiddleware from 'redux-sockets';
...
return createStore(
  ...
  applyMiddleware(socketIoMiddleware, ...middlewares)
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


## License

[MIT](LICENSE) © [Sharon Grossman](https://github.com/sharongrossman)