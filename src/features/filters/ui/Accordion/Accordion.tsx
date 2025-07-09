import {AnimatePresence} from 'motion/react'
import * as m from 'motion/react-m'
import {ReactNode} from 'react'
import styles from './Accordion.module.scss'

interface AccordionProps {
	isOpen: boolean
	children: ReactNode
}

export const Accordion = ({isOpen, children}: AccordionProps) => {
	return (
		<AnimatePresence initial={false}>
			<m.div
				className={styles.content}
				initial='collapsed'
				animate={isOpen ? 'expanded' : 'collapsed'}
				exit='collapsed'
				variants={{
					expanded: {height: 'auto', opacity: 1},
					collapsed: {height: 0, opacity: 0},
				}}
				transition={{duration: 0.3, ease: [0.4, 0, 0.2, 1]}}
			>
				{children}
			</m.div>
		</AnimatePresence>
	)
}
