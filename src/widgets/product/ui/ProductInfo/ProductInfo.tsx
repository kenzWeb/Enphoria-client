import {Slider} from '@/entitles/slider'
import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {EmblaOptionsType} from 'embla-carousel'
import {useParams} from 'react-router-dom'

export const ProductInfo = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)

	const OPTIONS: EmblaOptionsType = {
		axis: 'y',
		align: 'end',
		direction: 'rtl',
		containScroll: false,
	}

	return (
		<>
			{product && <Slider images={product.images} options={OPTIONS} />}
		</>
	)
}
