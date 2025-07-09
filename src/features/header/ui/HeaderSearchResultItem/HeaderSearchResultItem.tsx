import {SERVER_URL} from '@/shared/config/private.config'
import {PUBLIC_URL} from '@/shared/config/url.config'
import {IProduct} from '@/shared/types/product.interface'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.scss'

interface HeaderSearchResultItemProps {
	product: IProduct
	onClick: () => void
}

export const HeaderSearchResultItem = ({
	product,
	onClick,
}: HeaderSearchResultItemProps) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(PUBLIC_URL.shop(product.id))
		onClick()
	}

	return (
		<motion.div
			key={product?.id || Math.random()}
			className={styles.searchResult}
			whileHover={{scale: 1.01}}
			transition={{duration: 0.2}}
			onClick={handleClick}
		>
			<img
				className={styles.productImage}
				src={`${SERVER_URL}${product.images[0]}`}
				alt={product.name}
				loading='lazy'
			/>
			<div className={styles.productInfo}>
				<span className={styles.productName}>{product.name}</span>
				<span className={styles.category}>{product.category?.name}</span>
				<span className={styles.productPrice}>${product.price}</span>
			</div>
		</motion.div>
	)
}
