import {ProductCard} from '@/features/card'
import {Skeleton} from '@/shared/shad-cn/ui/Skeleton'
import {ICatalog} from '../../models/catalog.interface'
import styles from './styles.module.scss'

export const Catalog = ({
	products,
	size,
	category = true,
	variant = 'home',
	isLoading,
}: ICatalog) => {
	if (isLoading) {
		return (
			<section className={styles.catalog}>
				<div
					className={
						variant === 'home' || variant === 'similar'
							? styles.products_base
							: styles.products_shop
					}
				>
					{[...Array(size || 8)].map((_, i) => (
						<div key={i} className={styles.skeleton_wrapper}>
							<Skeleton className='h-[370px] w-full bg-gray-200 rounded-[14px]' />
							<div className='space-y-3 mt-4'>
								<Skeleton className='h-6 w-[90%] bg-gray-200' />
								<Skeleton className='h-6 w-[70%] bg-gray-200' />
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}

	return (
		<section className={styles.catalog}>
			<div
				className={
					variant === 'home'
						? styles.products_base
						: variant === 'similar'
						? styles.products_similar
						: styles.products_shop
				}
			>
				{products?.length ? (
					products
						.slice(0, size ? size : products.length)
						.map((product) => (
							<ProductCard
								key={product.id}
								category={category}
								product={product}
							/>
						))
				) : (
					<h2 className={variant === 'similar' ? styles.error : styles.title}>
						Products Not Found
					</h2>
				)}
			</div>
		</section>
	)
}
