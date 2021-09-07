import * as Styled from './grid.styles';
import { Item } from './item';

const Grid = ({ children, columns, ...props }) => (
  <Styled.Grid {...props} columns={columns || children.length}>
    {children}
  </Styled.Grid>
);

Grid.Item = Item;
export { Grid };
