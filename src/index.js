import io from 'socket.io-client';
import wildcard from 'socketio-wildcard';
import {default as reducer, socketConnect, CONNECTED, DISCONNECTED, CONNECT} from './reducer';

const defaultCreateSocket = () => io('', {path: '/ws'});

export {reducer, socketConnect, CONNECTED, DISCONNECTED, CONNECT};

export default ({createSocket = defaultCreateSocket} = {}) => {
  let socket;

  const initializeSocket = dispatch => {
    socket = createSocket();
    wildcard(io.Manager)(socket);

    socket.on('*', ({data}) => {
      const [
        type,
        payload = {}
      ] = data;

      dispatch({
        type: `server/${type}`,
        payload
      });
    });

    socket.on('disconnect', () => {
      dispatch({type: DISCONNECTED});
    });

    return new Promise(resolve => {
      socket.on('connect', () => {
        dispatch({type: CONNECTED});

        resolve();
      });
    });
  };

  return ({dispatch, getState}) => {
    return next => action => {
      const {type, payload = {}} = action;

      if (!type || !payload || !payload.socket) {
        return next(action);
      }

      const {socket: {emitName = type, data = {}}} = payload;

      if (emitName === CONNECT) {
        const promise = initializeSocket(dispatch);

        next(action);

        return promise;
      }

      if (!socket) {
        return next(action);
      }

      const finalData = typeof data === 'function' ? data(getState()) : data;

      action.payload.socket.data = finalData;

      socket.emit(emitName, finalData);

      return next(action);
    };
  };
};