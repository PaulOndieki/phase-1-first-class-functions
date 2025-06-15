function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    return "I am a named function!";
  };
}

function returnsAnAnonymousFunction() {
  return () => "I am an anonymous function!";
}