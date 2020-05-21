"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _finnovationKbDev = _interopRequireDefault(require("@bit/finnovation.kb-dev.with-theme-component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 86vw;  \n    ", ";\n    ", "\n    ", "\n    height: 48px;\n    ", "\n    font-size: ", "\n    font-weight: 600;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    ", "\n    outline: none;\n    position:relative;\n    ", "\n    ", "\n    ", "\n    ", "\n    &:after{\n            ", ";\n            width: 20px;\n            height: 20px;\n            background-color: #191919;\n            display: block;\n            top: 0;\n            position: absolute;\n            bottom: 0;\n            margin: auto;\n            right: 0;\n            animation: ", " 1s infinite;\n            left: 0;\n        }\n        &:before{\n            ", ";\n            background-color:#ffffff;\n            position:absolute;\n            display:block;\n            top:0;\n            left:0;\n            pointer-events: none;\n            border-radius:2px;\n            right:0;\n            padding:10px;\n        }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotateY(180deg);\n  }\n  100% {\n    transform: rotateY(180deg)  rotateX(180deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlipAnimation = (0, _styledComponents.keyframes)(_templateObject());

var Btn = _styledComponents.default.button(_templateObject2(), function (props) {
  return !props.loading && !props.secondaryBtn && !props.isUPI ? "background-color: ".concat(props.theme.primaryColour) : 'background-color: #fff';
}, function (props) {
  return !props.loading && props.isUPI ? 'background: linear-gradient(to right, #061d2e 0%, #083c6e 100%);' : null;
}, function (props) {
  return props.loading || props.isUPI ? 'color:#fff;' : "color:".concat(props.theme.buttonTextColour, ";");
}, function (props) {
  return props.noBorderRadius ? null : 'border-radius: 4px;';
}, function (props) {
  return props.fontSize ? props.fontSize : '1em;';
}, function (props) {
  return props.marginBottom && "margin-bottom: ".concat(props.marginBottom, ";");
}, function (props) {
  return props.loading || props.disabled ? "pointer-events:none;" : '';
}, function (props) {
  return props.disabled ? 'opacity: 0.5;' : null;
}, function (props) {
  return props.secondaryBtn ? "color: ".concat(props.loading ? '' : props.theme.secondaryBtnColour, ";border: 2px solid ").concat(props.theme.primaryColour, ";background-color: #fff;") : '';
}, function (props) {
  return props.disabled ? "pointer-events:none;" : '';
}, function (props) {
  return props.loading ? "content: ''" : '';
}, FlipAnimation, function (props) {
  return props.loading ? "content: ''" : '';
});

var Button = function Button(props) {
  var themeData = props.themeData;
  return /*#__PURE__*/_react.default.createElement(Btn, _extends({}, props, {
    theme: themeData
  }), props.BtnText);
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  secondaryBtn: false,
  marginBottom: '',
  fontSize: '',
  noBorderRadius: false,
  isUPI: false,
  BtnText: '',
  themeData: {
    primaryColour: '#fdd535',
    buttonTextColour: '#191919',
    secondaryBtnColour: '#191919'
  }
};
Button.propTypes = {
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  secondaryBtn: _propTypes.default.bool,
  marginBottom: _propTypes.default.string,
  fontSize: _propTypes.default.string,
  noBorderRadius: _propTypes.default.bool,
  isUPI: _propTypes.default.bool,
  themeData: _propTypes.default.object,
  BtnText: _propTypes.default.string
};

var _default = (0, _finnovationKbDev.default)(Button);

exports.default = _default;

//# sourceMappingURL=index.js.map