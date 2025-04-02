import {ProductCard} from '@/features/card'
import {SkeletonCard} from '@/shared/ui/SkeletonCard'
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
		const containerClass =
			variant === 'home'
				? styles.products_base
				: variant === 'similar'
				? styles.products_similar
				: styles.products_shop

		return (
			<section className={styles.catalog}>
				<div className={containerClass}>
					{Array.from({length: size || 6}).map((_, i) => (
						<SkeletonCard key={i} />
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
