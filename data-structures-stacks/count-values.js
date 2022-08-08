/* exported countValues */

function countValues(stack) {

  var counter = 0;

  while (stack.peek() !== undefined) {
    stack.pop();
    counter += 1;
  }

  return counter;

}
