import {FC} from 'react'
import {IoClose} from 'react-icons/io5'
import {Logo} from '../Logo/Logo'
import styles from './MobileHeader.module.scss'

interface MobileHeaderProps {
	onClose: () => void
}

export const MobileHeader: FC<MobileHeaderProps> = ({onClose}) => {
	return (
		<div className={styles.mobileHeader}>
			<Logo size='small' />
			<button
				className={styles.closeBtn}
				onClick={onClose}
				aria-label='Close menu'
			>
				<IoClose size={24} />
			</button>
		</div>
	)
}
