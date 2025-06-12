import {OrderDetailPageHeading} from '@/entitles/order'
import {OrderDetailInfo} from '@/widgets/order'
import styles from './OrderDetailPage.module.scss'

export const OrderDetailPage = () => {
	return (
		<div className={styles.container}>
			<OrderDetailPageHeading />
			<OrderDetailInfo />
		</div>
	)
}
