"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pull(xs, x) {
    var idx = xs.indexOf(x);
    if (idx > -1) {
        xs.splice(idx, 1);
    }
}
exports.pull = pull;
