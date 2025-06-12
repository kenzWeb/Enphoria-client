import {ProductInfo} from '@/features/product'
import {ProductDescription, ProductSlideWrapper} from '@/widgets/product'
import {SimilarProducts} from '@/widgets/similar'
import {useParams} from 'react-router-dom'
import styles from './ProductPage.module.scss'

export const ProductPage = () => {
	const {id} = useParams<{id: string}>()

	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.productMain}>
				<div className={styles.productSlide}>
					<ProductSlideWrapper key={`slide-${id}`} />
				</div>
				<div className={styles.productInfo}>
					<ProductInfo key={`info-${id}`} />
				</div>
			</div>
			<ProductDescription key={`desc-${id}`} />
			<SimilarProducts key={`similar-${id}`} />
		</div>
	)
}
