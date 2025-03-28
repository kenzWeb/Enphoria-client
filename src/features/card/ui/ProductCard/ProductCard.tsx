/* eslint-disable no-mixed-spaces-and-tabs */
import {FavoriteButton} from '@/features/favorite'
import {SERVER_URL} from '@/shared/config/private.config'
import {Badge} from '@/shared/shad-cn/ui/Badge'
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

	const handleFavoriteClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
	}

	return (
		<Link
			to={
				category
					? `/shop/?category=${product.category?.name}`
					: `/shop/${product.id}`
			}
		>
			<motion.div
				ref={ref}
				className={styles.card}
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
				<div className={styles.top}>
					{!category && (
						<div
							className={styles.favorite}
							style={{zIndex: 10}}
							onClick={handleFavoriteClick}
						>
							<FavoriteButton product={product} />
						</div>
					)}
					<motion.img
						src={`${SERVER_URL}${product.images[0]}`}
						alt={product.name}
						className={variant === 'home' ? styles.img_base : styles.img_shop}
						whileHover={{scale: 1.02}}
						transition={{duration: 0.2}}
					/>
				</div>

				<div className={styles.buttom}>
					<div className={styles.info}>
						<h3>{category ? product.category?.name : product.name}</h3>
						<p>{category ? 'Explore Now !' : product.brand}</p>
					</div>

					<div>
						{category ? (
							<motion.div whileHover={{x: 2}} transition={{duration: 0.2}}>
								<IoIosArrowRoundForward size={32} color='797979' />
							</motion.div>
						) : (
							<Badge variant='price'>${product.price}.00</Badge>
						)}
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
