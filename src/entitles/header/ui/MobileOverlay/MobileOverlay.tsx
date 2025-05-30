import {FC} from 'react'
import styles from './MobileOverlay.module.scss'

interface MobileOverlayProps {
	isVisible: boolean
	onClick: () => void
}

export const MobileOverlay: FC<MobileOverlayProps> = ({isVisible, onClick}) => {
	if (!isVisible) return null

	return <div className={styles.overlay} onClick={onClick} />
}
