import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseIndexOfDewDew } from "./_baseIndexOf.dew.js";
import { dew as _baseIndexOfWithDewDew } from "./_baseIndexOfWith.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew(),
      baseIndexOf = _baseIndexOfDewDew(),
      baseIndexOfWith = _baseIndexOfWithDewDew(),
      baseUnary = _baseUnaryDewDew(),
      copyArray = _copyArrayDewDew();
  /** Used for built-in method references. */


  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * The base implementation of `_.pullAllBy` without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   */

  function basePullAll(array, values, iteratee, comparator) {
    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
        index = -1,
        length = values.length,
        seen = array;

    if (array === values) {
      values = copyArray(values);
    }

    if (iteratee) {
      seen = arrayMap(array, baseUnary(iteratee));
    }

    while (++index < length) {
      var fromIndex = 0,
          value = values[index],
          computed = iteratee ? iteratee(value) : value;

      while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
        if (seen !== array) {
          splice.call(seen, fromIndex, 1);
        }

        splice.call(array, fromIndex, 1);
      }
    }

    return array;
  }

  exports = basePullAll;
  return exports;
}