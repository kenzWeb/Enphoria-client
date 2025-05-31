import {FavoriteButton} from '@/features/favorite'
import {SERVER_URL} from '@/shared/config/private.config'
import {IProduct} from '@/shared/types/product.interface'
import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

interface ProductCardProps {
	product: IProduct
	category: boolean
	variant?: 'shop' | 'home'
}

export const ProductCard = ({product, category, variant}: ProductCardProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true})

	const handleRightElementClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
	}

	return (
		<motion.div
			ref={ref}
			className={styles.productCard}
			initial={{opacity: 0, y: 20}}
			animate={
				isInView
					? {
							opacity: 1,
							y: 0,
					}
					: {}
			}
			transition={{duration: 0.4}}
			whileHover={{y: -5}}
		>
			<Link
				to={
					category
						? `/shop/?category=${product.category?.name}`
						: `/shop/${product.id}`
				}
				className={styles.cardLink}
			>
				<div className={styles.imageWrapper}>
					<motion.img
						src={`${SERVER_URL}${product.images[0]}`}
						alt={product.name}
						className={styles.productImage}
						data-variant={variant}
						whileHover={{scale: 1.02}}
						transition={{duration: 0.2}}
					/>

					{!category && (
						<div
							className={styles.favoriteBtn}
							onClick={handleRightElementClick}
						>
							<FavoriteButton product={product} />
						</div>
					)}

					<div
						className={styles.priceOverlay}
						onClick={handleRightElementClick}
					>
						{category ? (
							<motion.div
								className={styles.arrowIcon}
								whileHover={{x: 2}}
								transition={{duration: 0.2}}
							>
								<IoIosArrowRoundForward size={20} color='#797979' />
							</motion.div>
						) : (
							<span className={styles.priceTag}>${product.price}.00</span>
						)}
					</div>
				</div>

				<div className={styles.productInfo}>
					<h3 className={styles.productTitle}>
						{category ? product.category?.name : product.name}
					</h3>
					<p className={styles.productSubtitle}>
						{category ? 'Explore Now !' : product.brand}
					</p>
				</div>
			</Link>
		</motion.div>
	)
}
