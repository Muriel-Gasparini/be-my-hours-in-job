"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var env = {
  port: process.env.PORT || 3000
};
var _default = env;
exports["default"] = _default;