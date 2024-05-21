import PointerRectangle from '../../Other/PointerRectangle/PointerRectangle'
import styles from './styles.module.scss'

export const Title = ({children}: {children: React.ReactNode}) => {
	return (
		<div className={styles.container}>
			<PointerRectangle />
			<h1 className={styles.title}>{children}</h1>
		</div>
	)
}
