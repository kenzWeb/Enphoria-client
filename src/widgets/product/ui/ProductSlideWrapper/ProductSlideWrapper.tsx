import {ProductSlider} from '@/entitles/product'
import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {useParams} from 'react-router-dom'
import styles from './ProductSlideWrapper.module.scss'

export const ProductSlideWrapper = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)

	if (!product) return null

	return (
		<div className={styles.wrapper}>
			<ProductSlider images={product.images} />
		</div>
	)
}
