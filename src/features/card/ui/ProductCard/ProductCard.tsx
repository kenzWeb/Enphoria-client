import {SERVER_URL} from '@/shared/config/private.config'
import {IProduct} from '@/shared/types/product.interface'

import {Badge} from '@/shared/shad-cn/ui/Badge'
import {FavoriteButton} from '@/shared/ui/Buttons/FavoriteButton/FavoriteButton'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

interface ProductCardProps {
	product: IProduct
	category: boolean
}

export const ProductCard = ({product, category}: ProductCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.top}>
				{!category && (
					<div className={styles.favorite}>
						<FavoriteButton product={product} />
					</div>
				)}
				<img src={`${SERVER_URL}${product.images[0]}`} alt={product.name} />
			</div>
			<div className={styles.buttom}>
				<div className={styles.info}>
					<h3>{product.name}</h3>
					<p>{category ? 'Explore Now !' : product.brand}</p>
				</div>
				<div>
					{category ? (
						<Link to={'/'}>
							<IoIosArrowRoundForward size={32} color='797979' />
						</Link>
					) : (
						<Badge variant='price'>${product.price}.00</Badge>
					)}
				</div>
			</div>
		</div>
	)
}
