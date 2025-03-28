import {ProductInfo} from '@/features/product'
import {ProductDescription, ProductSlideWrapper} from '@/widgets/product'
import {SimilarProducts} from '@/widgets/similar'
import {useParams} from 'react-router-dom'

export const ProductPage = () => {
	const {id} = useParams<{id: string}>()

	return (
		<div className='container flex flex-col'>
			<div className='flex mb-[10rem]'>
				<ProductSlideWrapper key={`slide-${id}`} />
				<ProductInfo key={`info-${id}`} />
			</div>
			<ProductDescription key={`desc-${id}`} />
			<SimilarProducts key={`similar-${id}`} />
		</div>
	)
}
