import {
	ProductDescriptionMain,
	ProductDescriptionVideo,
} from '@/features/product'

import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {Title} from '@/shared/ui/Text'
import {useParams} from 'react-router-dom'
import styles from './ProductDescription.module.scss'

export const ProductDescription = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id ?? '')
	return (
		<>
			<Title>Product Description</Title>
			<div className={styles.container}>
				<ProductDescriptionMain
					text={product?.description ?? 'Описание отсутсвует'}
				/>

				<ProductDescriptionVideo />
			</div>
		</>
	)
}
