/* eslint-disable no-mixed-spaces-and-tabs */
import {SERVER_URL} from '@/shared/config/private.config'
import {useCartStore} from '@/shared/store/cart.store'
import {ICartItem} from '@/shared/types/cart.interface'
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'
import {BiMinus} from 'react-icons/bi'
import {BsPlus} from 'react-icons/bs'
import {HiOutlineTrash} from 'react-icons/hi2'
import styles from './styles.module.scss'

type Props = {
	data: ICartItem
}

export const ShoppingCartCard = ({data}: Props) => {
	const [isDeleting, setIsDeleting] = useState(false)
	const {removeFromCart, minus, plus} = useCartStore()

	const handleDelete = async () => {
		setIsDeleting(true)
		removeFromCart(data.variantKey || data.id)
		setTimeout(() => {}, 500)
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{opacity: 1, height: 'auto'}}
				animate={{
					opacity: isDeleting ? 0 : 1,
					height: isDeleting ? 0 : 'auto',
					transition: {
						opacity: {duration: 0.3},
						height: {duration: 0.5, delay: 0.2},
					},
				}}
			>
				<motion.div
					className={styles.container}
					initial={{x: 0}}
					animate={{
						x: isDeleting ? -100 : 0,
						transition: {duration: 0.3},
					}}
				>
					<div className={styles.base} key={data.id}>
						<motion.img
							className={styles.img}
							src={`${SERVER_URL}${data.img}`}
							alt={data.name}
							animate={{
								scale: isDeleting ? 0.8 : 1,
								opacity: isDeleting ? 0.5 : 1,
							}}
						/>
						<div className={styles.info}>
							<h3 className={styles.title}>{data.name}</h3>
							<div className={styles.details}>
								<div className={styles.colors}>
									<span className={styles.label}>Colors:</span>
									<div className={styles.colorList}>
										<span key={data.id} className={styles.colorItem}>
											{data.color}
										</span>
									</div>
								</div>
								<div className={styles.sizes}>
									<span className={styles.label}>Size:</span>
									<div className={styles.sizeList}>
										<span key={data.id} className={styles.sizeItem}>
											{data.size}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<motion.h2
						className={styles.price}
						animate={{
							opacity: isDeleting ? 0 : 1,
						}}
					>
						${data.price}.00
					</motion.h2>
					<div className={styles.quantity}>
						<button onClick={() => minus(data.variantKey || data.id)} className={styles.minus}>
							<BiMinus size={15} />
						</button>
						<span className={styles.count}>{data.quantity}</span>
						<button onClick={() => plus(data.variantKey || data.id)} className={styles.plus}>
							<BsPlus size={15} />
						</button>
					</div>
					<motion.h2
						className={styles.shipping}
						animate={{
							opacity: isDeleting ? 0 : 1,
						}}
					>
						free
					</motion.h2>
					<motion.h2
						className={styles.total}
						animate={{
							opacity: isDeleting ? 0 : 1,
						}}
					>
						{data.price * data.quantity}.00
					</motion.h2>

					<motion.button
						className={styles.delete}
						onClick={handleDelete}
						disabled={isDeleting}
						whileHover={{
							scale: 1.2,
							rotate: [0, -10, 10, -10, 0],
							transition: {duration: 0.5},
						}}
						whileTap={{scale: 0.9}}
						initial={false}
						animate={
							isDeleting
								? {
										rotate: [0, 360],
										scale: [1, 0.5, 0],
										transition: {duration: 0.5},
								  }
								: {}
						}
					>
						<motion.div
							animate={
								isDeleting
									? {
											rotate: [0, 90],
											transition: {duration: 0.2},
									  }
									: {}
							}
						>
							<HiOutlineTrash color='#8A33FD' size={18} />
						</motion.div>
					</motion.button>

					{isDeleting && (
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 0.5}}
							className='absolute inset-0 bg-white/50 rounded-lg'
							style={{zIndex: 5}}
						/>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}
