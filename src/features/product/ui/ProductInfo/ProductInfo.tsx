import {ProductToggle} from '@/entitles/product'
import {ProductActions} from '@/entitles/product/ui/ProductActions/ProductActions'
import {useGetProductById} from '@/shared/hooks/queries/products/useGetProductById'
import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {useCartStore} from '@/shared/store/cart.store'
import {Breadcrumbs} from '@/shared/ui/Other'
import {useState} from 'react'
import toast from 'react-hot-toast'
import {useParams} from 'react-router-dom'
import styles from './ProductInfo.module.scss'

export const ProductInfo = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)
	const {addToCart} = useCartStore()

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

	const handleAddToCart = () => {
		if (!selectedSize || !selectedColor) {
			toast.error('Please select size and color')
			return
		} else {
			toast.success('Product added to cart')
		}
		if (!product) return
		addToCart({
			id: product.id || '',
			name: product.name,
			size: selectedSize,
			color: selectedColor,
			price: product.price,
			img: product.images[0],
			quantity: 1,
		})
		console.log(useCartStore.getState().cart)
	}

	return (
		<div className='mt-6 flex flex-col gap-[1rem]'>
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

			<ProductActions price={product?.price} onAddToCart={handleAddToCart} />
		</div>
	)
}
