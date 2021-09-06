import * as Styled from './grid.styles';

export const Grid = ({ children, columns, ...props }) => (
  <Styled.Grid {...props} columns={columns || children.length}>
    {children}
  </Styled.Grid>
);
