"use strict";
/**
 *  emoji-log
 *
 *  @license  MIT License
 *
 *  Art by Colin J. Randall
 *
 *               \
 *                \
 *                 \\
 *                  \\
 *                   >\/7
 *               _.-(6'  \
 *              (=___._/` \
 *                   )  \ |
 *                  /   / |
 *                 /    > /
 *                j    < _\
 *            _.-' :      ``.
 *            \ r=._\        `.
 *           <`\\_  \         .`-.
 *            \ r-7  `-. ._  ' .  `\
 *             \`,      `-.`7  7)   )
 *              \/         \|  \'  / `-._
 *                         ||    .'
 *                          \\  (
 *                           >\  >
 *                       ,.-' >.'
 *                      <.'_.''
 *                        <'
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// For TS to stop screaming
class CustomConsole {
}
exports.CustomConsole = CustomConsole;
var Constants;
(function (Constants) {
    Constants[Constants["LINE_LENGTH_VARIABLE"] = 0.66] = "LINE_LENGTH_VARIABLE";
    Constants[Constants["DEFAULT_LINE_LENGTH"] = 4] = "DEFAULT_LINE_LENGTH";
    Constants[Constants["ONE"] = 1] = "ONE";
    Constants[Constants["TWO"] = 2] = "TWO";
    Constants[Constants["THREE"] = 3] = "THREE";
})(Constants || (Constants = {}));
function instanceOfError(e) {
    return (e && (e === null || e === void 0 ? void 0 : e.stack) && (e === null || e === void 0 ? void 0 : e.message) &&
        typeof e.stack === 'string' &&
        typeof e.message === 'string');
}
function logToConsole(error, emoji = '🐶', length) {
    // ToDo: optionally log time & date
    const isError = instanceOfError(error);
    const message = isError ? error.message : error;
    const len = length ||
        (error === null || error === void 0 ? void 0 : error.toString().length) * Constants.LINE_LENGTH_VARIABLE ||
        Constants.DEFAULT_LINE_LENGTH;
    console.log(`
      /‾${`‾‾`.repeat(len)}‾
  ${emoji} < `, message, `
      \\_${`__`.repeat(len)}_
  `);
    if (isError) {
        // Node.js
        if (typeof window !== 'undefined') {
            console.groupCollapsed(`${emoji} > Stack Trace:`);
            console.error(error.stack);
            console.groupEnd();
        }
        else {
            console.log(`${emoji} > Stack Trace:`);
            console.error(error.stack);
        }
    }
}
console.emoji = function (...args) {
    const log = [];
    log[0] = function () {
        logToConsole('Meow', '🐱');
        return this;
    };
    log[Constants.ONE] = function (error) {
        logToConsole(error);
        return this;
    };
    log[Constants.TWO] = function (emoji, error) {
        logToConsole(error, emoji);
        return this;
    };
    log[Constants.THREE] = function (emoji, error, length) {
        logToConsole(error, emoji, length);
        return this;
    };
    this.emoji = function (...passedArgs) {
        // call according to index
        log[passedArgs.length](...passedArgs);
        return this;
    };
    this.emoji(...args);
    return this;
};
