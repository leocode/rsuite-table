import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNullOrUndefined, getUnhandledProps, defaultClassPrefix, prefix } from './utils';
import Cell from './Cell';

var FooterCell = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(FooterCell, _React$PureComponent);

  FooterCell.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
      return {
        width: nextProps.width,
        flexGrow: nextProps.flexGrow,
        columnWidth: isNullOrUndefined(nextProps.flexGrow) ? nextProps.width : 0
      };
    }

    return null;
  };

  function FooterCell(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.addPrefix = function (name) {
      return prefix(_this.props.classPrefix)(name);
    };

    _this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: isNullOrUndefined(props.flexGrow) ? props.width : 0
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
        rest = _objectWithoutPropertiesLoose(_this$props, ["className", "width", "dataKey", "footerHeight", "children", "left", "classPrefix"]);

    var classes = classNames(classPrefix, className);
    var unhandledProps = getUnhandledProps(FooterCell, rest);
    return /*#__PURE__*/React.createElement("div", {
      className: classes
    }, /*#__PURE__*/React.createElement(Cell, _extends({}, unhandledProps, {
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
  index: PropTypes.number,
  flexGrow: PropTypes.number,
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),
  children: PropTypes.node
};
FooterCell.defaultProps = {
  classPrefix: defaultClassPrefix('table-cell-footer')
};
export default FooterCell;