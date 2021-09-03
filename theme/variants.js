import {css} from './stiches.config'
export const focusableVariants = css({
	variants: {
	    focusVisible: {
	  	  true: {
	  	      bg: '$yellow6',
            p: '$4'

	  	  }
	    }
	}
})

export const flexVariants = css({
	variants: {
	    flex: {
	  	  true: {
	  	      display: 'flex',
            jc: 'center',
            ai: 'center',
            fd: 'column'
	  	  }
	    },
	}
})