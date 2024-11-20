import {ManWrapper} from '@/features/man'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'

export const Man = () => {
	return (
		<div className={styles.section}>
			<Title>Categories For Men</Title>
			<ManWrapper />
		</div>
	)
}
