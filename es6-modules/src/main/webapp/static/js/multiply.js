function multiply(x,y) {
  return function(x,y){
    return x*y;
  };
}

export { multiply as multiply};