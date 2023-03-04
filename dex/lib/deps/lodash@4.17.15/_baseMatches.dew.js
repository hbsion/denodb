import { dew as _baseIsMatchDewDew } from "./_baseIsMatch.dew.js";
import { dew as _getMatchDataDewDew } from "./_getMatchData.dew.js";
import { dew as _matchesStrictComparableDewDew } from "./_matchesStrictComparable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsMatch = _baseIsMatchDewDew(),
      getMatchData = _getMatchDataDewDew(),
      matchesStrictComparable = _matchesStrictComparableDewDew();
  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */


  function baseMatches(source) {
    var matchData = getMatchData(source);

    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }

    return function (object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  exports = baseMatches;
  return exports;
}