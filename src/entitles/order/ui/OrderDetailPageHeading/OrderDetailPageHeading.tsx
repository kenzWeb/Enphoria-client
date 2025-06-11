import {Title} from '@/shared/ui/Text'
import styles from './OrderDetailPageHeading.module.scss'

export const OrderDetailPageHeading = () => {
	return (
		<div className={styles.wrapper}>
			<Title favorite={false} marginBottom='50'>
				Order Detail
			</Title>
		</div>
	)
}
