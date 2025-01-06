import {ProductInfo} from '@/features/product'
import {ProductSlideWrapper} from '@/widgets/product'

export const ProductPage = () => {
	return (
		<div className='container flex'>
			<ProductSlideWrapper />
			<ProductInfo />
		</div>
	)
}
