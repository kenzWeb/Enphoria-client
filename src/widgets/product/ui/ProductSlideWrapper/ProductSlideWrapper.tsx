import {ProductSlider} from '@/entitles/product'
import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {useParams} from 'react-router-dom'

export const ProductSlideWrapper = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)

	if (!product) return null

	return (
		<div>
			<ProductSlider images={product.images} />
		</div>
	)
}
