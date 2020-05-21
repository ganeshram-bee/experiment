"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KBTheme = {
  primaryColour: '#fdd535',
  buttonTextColour: '#191919',
  secondaryBtnColour: '#191919'
};
var KZTheme = {
  primaryColour: '#4747b4',
  buttonTextColour: '#ffffff',
  secondaryBtnColour: '#000000'
};
test('Button- default props case:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, null)).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for secondary button and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    secondaryBtn: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for secondary button and KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    secondaryBtn: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for secondary button , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    secondaryBtn: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for secondary button and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    secondaryBtn: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for disabled button , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    secondaryBtn: true,
    disabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for disabled button and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    secondaryBtn: true,
    disabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for disabled button , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    disabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for disabled button and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    disabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for noBorderRadius , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    noBorderRadius: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for noBorderRadius and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    noBorderRadius: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for fontSize , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    fontSize: "1.5em"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for fontSize and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    fontSize: "1.5em"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for marginBottom , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    marginBottom: "10px"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for marginBottom and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    marginBottom: "10px"
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for loading , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    loading: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for loading and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    loading: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for isUPI , BtnText and KB Theme :it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KBTheme,
    BtnText: "OK",
    isUPI: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
test('Button- for isUPI and, BtnText KZ Theme:it works', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_.default, {
    themeData: KZTheme,
    BtnText: "OK",
    isUPI: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});

//# sourceMappingURL=index.test.js.map