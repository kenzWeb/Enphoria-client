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
}

export const ProductCard = ({product, category}: ProductCardProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true})

	return (
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
					<div className={styles.favorite} style={{zIndex: 10}}>
						<FavoriteButton product={product} />
					</div>
				)}
				<motion.img
					src={`${SERVER_URL}${product.images[0]}`}
					alt={product.name}
					whileHover={{scale: 1.05}}
					transition={{duration: 0.3}}
				/>
			</div>

			<div className={styles.buttom}>
				<div className={styles.info}>
					<h3>{product.name}</h3>
					<p>{category ? 'Explore Now !' : product.brand}</p>
				</div>

				<div>
					{category ? (
						<Link to={'/'}>
							<motion.div whileHover={{x: 5}} transition={{duration: 0.2}}>
								<IoIosArrowRoundForward size={32} color='797979' />
							</motion.div>
						</Link>
					) : (
						<Badge variant='price'>${product.price}.00</Badge>
					)}
				</div>
			</div>
		</motion.div>
	)
}
