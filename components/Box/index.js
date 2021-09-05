import { styled } from '../../theme/stiches.config';
import { flexVariants } from '../../theme/variants';

const Box = styled('div', {
  defaultVariants: {
    color: '$red3',
  },
}, flexVariants);

export default Box;
