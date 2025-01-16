import { ProductToggle } from '@/entitles/product'
import { useGetProductById } from '@/shared/hooks/queries/products/useGetProductById'
import { useBreadcrumbs } from '@/shared/hooks/useBreadcrumbs'
import { Breadcrumbs } from '@/shared/ui/Other'
import { useParams } from 'react-router-dom'
import styles from './ProductInfo.module.scss'

export const ProductInfo = () => {
	const {id} = useParams<{id: string}>()
	const {product} = useGetProductById(id!)

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
			/>
		</div>
	)
}
