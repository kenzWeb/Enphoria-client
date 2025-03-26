import {ProductInfo} from '@/features/product'
import {ProductDescription, ProductSlideWrapper} from '@/widgets/product'
import {SimilarProducts} from '@/widgets/similar'

export const ProductPage = () => {
	return (
		<div className='container flex flex-col'>
			<div className='flex mb-[10rem]'>
				<ProductSlideWrapper />
				<ProductInfo />
			</div>
			<ProductDescription />
			<SimilarProducts />
		</div>
	)
}
