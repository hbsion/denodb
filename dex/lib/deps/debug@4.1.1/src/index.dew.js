import { dew as _browserDewDew } from "./browser.dew.js";
import { dew as _nodeDewDew } from "./node.dew.js";
import _process from "../../@jspm/core@2.0.0-beta.11/nodelibs/deno/process.ts";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  /**
   * Detect Electron renderer / nwjs process, which is node, but we should
   * treat as a browser.
   */
  if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
    exports = _browserDewDew();
  } else {
    exports = _nodeDewDew();
  }

  return exports;
}
