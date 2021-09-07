import * as Styled from './button.styles';

export const Button = ({ children, icon, ...props }) => (
  <Styled.Button {...props} icon={icon && true}>
    {icon && <span className="iconContainer">{icon}</span>}
    {children && <span className="childrenContainer">{children}</span>}
  </Styled.Button>
);
