import { styled } from '../../theme/stiches.config';
import { focusableVariants } from '../../theme/variants';

const Button = styled('button', {
  border: 0,
  borderRadius: '$2',
  fontSize: '$3',
  transition: 'background-color .2s',
  '&:hover': {
    cursor: 'pointer',
  },

},
focusableVariants
);

export default Button;
