import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isNullOrUndefined, getUnhandledProps, defaultClassPrefix, prefix } from './utils';
import Cell from './Cell';
import { FooterCellProps } from './FooterCell.d';

interface FooterCellState {
  columnWidth?: number;
  width?: number;
  flexGrow?: number;
}

class FooterCell extends React.PureComponent<FooterCellProps, FooterCellState> {
  static propTypes = {
    index: PropTypes.number,
    flexGrow: PropTypes.number,
    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),
    children: PropTypes.node
  };
  static defaultProps = {
    classPrefix: defaultClassPrefix('table-cell-footer')
  };

  static getDerivedStateFromProps(nextProps: FooterCellProps, prevState: FooterCellState) {
    if (nextProps.width !== prevState.width || nextProps.flexGrow !== prevState.flexGrow) {
      return {
        width: nextProps.width,
        flexGrow: nextProps.flexGrow,
        columnWidth: isNullOrUndefined(nextProps.flexGrow) ? nextProps.width : 0
      };
    }

    return null;
  }

  constructor(props: FooterCellProps) {
    super(props);
    this.state = {
      width: props.width,
      flexGrow: props.flexGrow,
      columnWidth: isNullOrUndefined(props.flexGrow) ? props.width : 0
    };
  }

  addPrefix = (name: string) => prefix(this.props.classPrefix)(name);

  render() {
    const {
      className,
      width,
      dataKey,
      footerHeight,
      children,
      left,
      classPrefix,
      ...rest
    } = this.props;

    const classes = classNames(classPrefix, className);
    const unhandledProps = getUnhandledProps(FooterCell, rest);

    return (
      <div className={classes}>
        <Cell
          {...unhandledProps}
          width={width}
          dataKey={dataKey}
          left={left}
          footerHeight={footerHeight}
          isFooterCell={true}
        >
          {children}
        </Cell>
      </div>
    );
  }
}

export default FooterCell;
