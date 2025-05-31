import {FC} from 'react'
import styles from './MobileOverlay.module.scss'

interface MobileOverlayProps {
	onClose: () => void
}

export const MobileOverlay: FC<MobileOverlayProps> = ({onClose}) => {
	return <div className={styles.overlay} onClick={onClose} />
}
