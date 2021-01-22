import { CellProps } from './Cell.d';

export interface FooterCellProps extends CellProps {
  index?: number;
  flexGrow?: number;
  fixed?: boolean | 'left' | 'right';
  children: React.ReactNode;
}

declare const FooterCell: React.ComponentType<FooterCellProps>;

export default FooterCell;
