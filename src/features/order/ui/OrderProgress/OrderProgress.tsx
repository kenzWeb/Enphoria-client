import styles from './OrderProgress.module.scss'

interface OrderProgressProps {
	currentStatus: 'pending' | 'inprogress' | 'shipped' | 'delivered'
}

export const OrderProgress = ({currentStatus}: OrderProgressProps) => {
	const steps = [
		{key: 'pending', label: 'Order Placed'},
		{key: 'inprogress', label: 'Inprogress'},
		{key: 'shipped', label: 'Shipped'},
		{key: 'delivered', label: 'Delivered'},
	]

	const getStepIndex = (status: string) => {
		return steps.findIndex((step) => step.key === status)
	}

	const currentIndex = getStepIndex(currentStatus)

	return (
		<div className={styles.container}>
			<div className={styles.progressTrack}>
				<div className={styles.line} />
				{steps.map((step, index) => (
					<div key={step.key} className={styles.stepContainer}>
						<div
							className={`${styles.step} ${
								index <= currentIndex ? styles.completed : styles.pending
							}`}
						>
							{index < currentIndex && <div className={styles.innerDot} />}
						</div>
					</div>
				))}
			</div>
			<div className={styles.labels}>
				{steps.map((step, index) => (
					<div
						key={step.key}
						className={`${styles.label} ${
							index === currentIndex
								? styles.current
								: index < currentIndex
								? styles.completed
								: styles.pending
						}`}
					>
						{step.label}
					</div>
				))}
			</div>
		</div>
	)
}
