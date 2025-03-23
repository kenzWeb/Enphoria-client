import {productFeature} from '@/shared/data/product.data'
import styles from './ProductFeatures.module.scss'

export const ProductFeatures = () => {
	return (
		<div className={styles.features}>
			{productFeature.map((feature, index) => (
				<div key={index} className={styles.feature}>
					<img src={feature.features} alt={feature.title} />
					<span>{feature.title}</span>
				</div>
			))}
		</div>
	)
}
