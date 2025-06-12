import {
	ProductActions,
	ProductFeatures,
	ProductToggle,
} from '@/entitles/product'

import {handleAddToCart} from '@/shared/handles/handleAddToCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {useCartStore} from '@/shared/store/cart.store'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Line} from '@/shared/ui/Other/Line/Line'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import styles from './ProductInfo.module.scss'

export const ProductInfo = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)
	const {addToCart} = useCartStore()
	const {user} = useProfile()

	const [selectedSize, setSelectedSize] = useState<string>('')
	const [selectedColor, setSelectedColor] = useState<string>('')

	const breadcrumbs = useBreadcrumbs({
		items: [
			{
				name: 'Shop',
				href: '/shop',
			},
			{
				name: String(product?.gender).toLowerCase() || '',
				href: `/shop?gender=${product?.gender}`,
			},
		],
		endPage: product?.category?.name || '',
	})

	return (
		<div className={`mt-6 flex flex-col gap-[1rem] ${styles.container}`}>
			<Breadcrumbs {...breadcrumbs} />
			<h2 className={styles.title}>{product?.name}</h2>
			<ProductToggle
				title='Select Size'
				items={product?.productSizes?.map(({size}) => ({
					id: size?.id,
					name: size?.name,
				}))}
				variant='size'
				isLink={true}
				onSelect={setSelectedSize}
			/>
			<ProductToggle
				title='Colours Available'
				items={product?.productColors?.map(({color}) => ({
					id: color?.id,
					name: color?.name,
					value: color?.value,
				}))}
				variant='color'
				isLink={false}
				onSelect={setSelectedColor}
			/>

			<ProductActions
				price={product?.price}
				onAddToCart={() =>
					handleAddToCart({
						selectedSize,
						selectedColor,
						product,
						user,
						addToCart,
					})
				}
			/>

			<Line className='my-10' />

			<ProductFeatures />
		</div>
	)
}
