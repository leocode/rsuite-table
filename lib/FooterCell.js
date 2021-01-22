"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _Cell = _interopRequireDefault(require("./Cell"));

var FooterCell = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(FooterCell, _React$PureComponent);

  FooterCell.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
      return {
        width: nextProps.width,
        flexGrow: nextProps.flexGrow,
        columnWidth: (0, _utils.isNullOrUndefined)(nextProps.flexGrow) ? nextProps.width : 0
      };
    }

    return null;
  };

  function FooterCell(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.addPrefix = function (name) {
      return (0, _utils.prefix)(_this.props.classPrefix)(name);
    };

    _this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: (0, _utils.isNullOrUndefined)(props.flexGrow) ? props.width : 0
    };
    return _this;
  }

  var _proto = FooterCell.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        width = _this$props.width,
        dataKey = _this$props.dataKey,
        footerHeight = _this$props.footerHeight,
        children = _this$props.children,
        left = _this$props.left,
        classPrefix = _this$props.classPrefix,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["className", "width", "dataKey", "footerHeight", "children", "left", "classPrefix"]);
    var classes = (0, _classnames["default"])(classPrefix, className);
    var unhandledProps = (0, _utils.getUnhandledProps)(FooterCell, rest);
    return /*#__PURE__*/React.createElement("div", {
      className: classes
    }, /*#__PURE__*/React.createElement(_Cell["default"], (0, _extends2["default"])({}, unhandledProps, {
      width: width,
      dataKey: dataKey,
      left: left,
      footerHeight: footerHeight,
      isFooterCell: true
    }), children));
  };

  return FooterCell;
}(React.PureComponent);

FooterCell.propTypes = {
  index: _propTypes["default"].number,
  flexGrow: _propTypes["default"].number,
  fixed: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])]),
  children: _propTypes["default"].node
};
FooterCell.defaultProps = {
  classPrefix: (0, _utils.defaultClassPrefix)('table-cell-footer')
};
var _default = FooterCell;
exports["default"] = _default;
module.exports = exports.default;