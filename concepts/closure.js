function encapsulatedState(x) {
    let state = 10;
    return function() {
      state += x;
      return state;
    }
  }