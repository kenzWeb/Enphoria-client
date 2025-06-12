import {getOrderStatusIndex, orderProgressSteps} from '../../models'
import {OrderProgressProps} from '../../types'
import styles from './OrderProgress.module.scss'

export const OrderProgress = ({currentStatus}: OrderProgressProps) => {
	const currentIndex = getOrderStatusIndex(currentStatus)

	return (
		<div className={styles.container}>
			<div className={styles.progressTrack}>
				<div
					className={styles.progressLine}
					style={{
						width: `${(currentIndex / (orderProgressSteps.length - 1)) * 100}%`,
					}}
				/>
				<div className={styles.backgroundLine} />

				{orderProgressSteps.map((step, index) => {
					const isCompleted = index <= currentIndex
					const isCurrent = index === currentIndex

					return (
						<div key={step.key} className={styles.stepContainer}>
							<div
								className={`${styles.step} ${
									isCompleted ? styles.completed : styles.pending
								} ${isCurrent ? styles.current : ''}`}
							>
								{isCompleted && (
									<div className={styles.checkmark}>
										<svg width='10' height='8' viewBox='0 0 10 8' fill='none'>
											<path
												d='M1 4L3.5 6.5L9 1'
												stroke='white'
												strokeWidth='1.5'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								)}
							</div>
						</div>
					)
				})}
			</div>

			<div className={styles.labels}>
				{orderProgressSteps.map((step, index) => {
					const isCompleted = index <= currentIndex
					const isCurrent = index === currentIndex

					return (
						<div
							key={step.key}
							className={`${styles.label} ${
								isCurrent
									? styles.current
									: isCompleted
									? styles.completed
									: styles.pending
							}`}
						>
							{step.label}
						</div>
					)
				})}
			</div>
		</div>
	)
}
