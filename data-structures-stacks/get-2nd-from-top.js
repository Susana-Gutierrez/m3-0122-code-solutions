/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  var firstFromTop;
  var secondFromTop;

  var counter = 1;

  if (stack.peek() === undefined) {
    return undefined;
  }

  while (counter <= 2) {
    if (counter === 1) {
      firstFromTop = stack.pop();
    }
    if (counter === 2) {
      secondFromTop = stack.peek();
      stack.push(firstFromTop);
      return secondFromTop;
    }
    counter += 1;
  }

}
