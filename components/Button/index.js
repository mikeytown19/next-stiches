import { styled } from '../../stiches.config';

const Button = styled('button', {
  bg: '$blue8',
  border: 0,
  borderRadius: '$2',
  fontSize: '$3',
  p: '$2',
  transition: 'background-color .2s',
  '&:hover': {
    backgroundColor: 'lightgray',
    cursor: 'pointer',
  }
});

export default Button;
