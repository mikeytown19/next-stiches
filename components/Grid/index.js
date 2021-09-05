import * as Styled from './grid.styles';

const Grid = ({ children, ...props }) => (
  <Styled.Grid {...props} columns={children.length}>
    {children}
  </Styled.Grid>
);

export default Grid;
