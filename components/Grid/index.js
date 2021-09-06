import * as Styled from './grid.styles';

const Grid = ({ children, columns, ...props }) => (
  <Styled.Grid {...props} columns={columns || children.length}>
    {children}
  </Styled.Grid>
);

export default Grid;
