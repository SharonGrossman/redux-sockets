import {createAction} from 'redux-actions';

export const CONNECTED = 'server/CONNECTED';
export const DISCONNECTED = 'server/DISCONNECTED';
export const CONNECT = 'socket/CONNECT';

const initialState = {
  connected: false
};

export default function socket (state = initialState, {type}) {
  switch (type) {
  case CONNECTED:
    return {
      ...state,
      connected: true
    };
  case DISCONNECTED:
    return {
      ...state,
      connected: false
    };
  default:
    return state;
  }
}

export const socketConnect = createAction(CONNECT, () => ({
  socket: {
    emitName: 'socket/CONNECT'
  }
}));