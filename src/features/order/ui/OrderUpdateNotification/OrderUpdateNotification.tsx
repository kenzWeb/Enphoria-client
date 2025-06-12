import styles from './OrderUpdateNotification.module.scss'

interface OrderUpdateNotificationProps {
	date: string
	message: string
}

export const OrderUpdateNotification = ({
	date,
	message,
}: OrderUpdateNotificationProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<span className={styles.date}>{date}</span>
				<span className={styles.message}>{message}</span>
			</div>
		</div>
	)
}
