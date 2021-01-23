"use strict";

var _express = _interopRequireDefault(require("express"));

var _envs = _interopRequireDefault(require("./config/envs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = (0, _express["default"])();
App.listen(_envs["default"].port, console.log("Server on port: ".concat(_envs["default"].port)));