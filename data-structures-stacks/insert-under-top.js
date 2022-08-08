/* exported insertUnderTop */

function insertUnderTop(stack, value) {

  var top;

  if (stack.peek() !== undefined) {
    top = stack.pop();
    stack.push(value);
    stack.push(top);
    return stack;
  }

}
