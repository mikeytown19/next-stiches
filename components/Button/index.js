import * as Styled from './button.styles';

const Button = ({ children, icon, ...props }) => (
  <Styled.Button {...props}>
    {icon && icon}
    {children}
  </Styled.Button>
);

export default Button;
