import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defaultClassPrefix, getUnhandledProps, prefix } from './utils';
import TableContext from './TableContext';

var Row = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Row, _React$PureComponent);

  function Row() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        className = _this$props.className,
        width = _this$props.width,
        height = _this$props.height,
        top = _this$props.top,
        style = _this$props.style,
        isHeaderRow = _this$props.isHeaderRow,
        isFooterRow = _this$props.isFooterRow,
        headerHeight = _this$props.headerHeight,
        footerHeight = _this$props.footerHeight,
        rowRef = _this$props.rowRef,
        classPrefix = _this$props.classPrefix,
        children = _this$props.children,
        rest = _objectWithoutPropertiesLoose(_this$props, ["className", "width", "height", "top", "style", "isHeaderRow", "isFooterRow", "headerHeight", "footerHeight", "rowRef", "classPrefix", "children"]);

    var addPrefix = prefix(classPrefix);
    var classes = classNames(classPrefix, className, (_classNames = {}, _classNames[addPrefix('header')] = isHeaderRow, _classNames[addPrefix('footer')] = isFooterRow, _classNames));
    var rowHeight = height;

    if (isHeaderRow) {
      rowHeight = headerHeight;
    } else if (isFooterRow) {
      rowHeight = footerHeight;
    }

    var styles = _extends({
      minWidth: width,
      height: rowHeight
    }, style);

    var unhandledProps = getUnhandledProps(Row, rest);
    return /*#__PURE__*/React.createElement(TableContext.Consumer, null, function (_ref) {
      var translateDOMPositionXY = _ref.translateDOMPositionXY;
      translateDOMPositionXY === null || translateDOMPositionXY === void 0 ? void 0 : translateDOMPositionXY(styles, 0, top);
      return /*#__PURE__*/React.createElement("div", _extends({
        role: "row"
      }, unhandledProps, {
        ref: rowRef,
        className: classes,
        style: styles
      }), children);
    });
  };

  return Row;
}(React.PureComponent);

Row.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  headerHeight: PropTypes.number,
  top: PropTypes.number,
  isHeaderRow: PropTypes.bool,
  rowRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  style: PropTypes.object
};
Row.defaultProps = {
  classPrefix: defaultClassPrefix('table-row'),
  height: 46,
  headerHeight: 40,
  footerHeight: 40
};
export default Row;