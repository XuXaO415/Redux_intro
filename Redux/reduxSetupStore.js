// const store = Redux.createStore(); // creates a new store

/** Reducers are fxn
 * - reducers are pure functions
 * 
 *  They accept two objects: a state and a action
 * 
 * They return a new state
 *  - if the state is undefined, it will return the initial state
 * - if the action is undefined, it will return the state
 * - if the action is defined, it will return the new state
 * 
 * They use the action to produce and return a new state
 */

const INITIAL_STATE = { count: 0 };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);