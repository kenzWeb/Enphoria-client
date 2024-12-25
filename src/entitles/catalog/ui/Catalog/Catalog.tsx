import {ProductCard} from '@/features/card'
import {ICatalog} from '../../models/catalog.interface'
import styles from './styles.module.scss'

export const Catalog = ({
	products,
	size,
	category = true,
	variant = 'home',
}: ICatalog) => {
	return (
		<section className={styles.catalog}>
			<div
				className={
					variant === 'home' ? styles.products_base : styles.products_shop
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
					<div>Ничего не найдено</div>
				)}
			</div>
		</section>
	)
}
