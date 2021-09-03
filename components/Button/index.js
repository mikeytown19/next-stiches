import * as Styled from './button.styles';

const Button = ({ children, icon, ...props }) => (
  <Styled.Button {...props} icon={icon && true}>
    {icon && <span className="iconContainer">{icon}</span>}
    {children && <span className="childrenContainer">{children}</span>}
  </Styled.Button>
);

export default Button;
