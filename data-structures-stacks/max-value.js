/* exported maxValue */

function maxValue(stack) {

  var maxNum;

  while (stack.peek() !== undefined) {

    if ((stack.peek() > maxNum) || (maxNum === undefined)) {
      maxNum = stack.peek();
    }
    stack.pop();
  }

  if (maxNum === undefined) {
    return -Infinity;
  }

  return maxNum;

}
