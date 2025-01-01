import {useFavorite} from '@/shared/hooks/api/useFavorite'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {Button} from '@/shared/shad-cn/ui/Button'
import {IProduct} from '@/shared/types/product.interface'
import {AnimatePresence, motion} from 'framer-motion'
import {Loader2} from 'lucide-react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import styles from './styles.module.scss'

interface FavoriteButtonProps {
	product: IProduct
}

export const FavoriteButton = ({product}: FavoriteButtonProps) => {
	const {user} = useProfile()
	const navigate = useNavigate()
	const {mutate, isPending} = useFavorite(product)

	const handleFavoriteClick = () => {
		if (!user) navigate('/auth/')

		mutate()
	}

	const isExists = user?.favorites.some(
		(favorite) => favorite.id === product.id,
	)

	return (
		<motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
			<Button
				variant='favorite'
				size='favorite'
				onClick={handleFavoriteClick}
				className={styles.favoriteButton}
				disabled={isPending}
			>
				{isPending ? (
					<Loader2 className='h-4 w-4 animate-spin' />
				) : (
					<AnimatePresence mode='wait'>
						{isExists ? (
							<motion.div
								key='filled'
								initial={{scale: 0, rotate: -180}}
								animate={{
									scale: 1,
									rotate: 0,
									transition: {
										type: 'spring',
										stiffness: 300,
										damping: 20,
									},
								}}
								exit={{
									scale: 0,
									rotate: 180,
									transition: {duration: 0.2},
								}}
							>
								<AiFillHeart color='#F43F5E' className={styles.favorite} />
							</motion.div>
						) : (
							<motion.div
								key='outline'
								initial={{scale: 0}}
								animate={{
									scale: 1,
									transition: {
										type: 'spring',
										stiffness: 300,
										damping: 20,
									},
								}}
								exit={{scale: 0}}
							>
								<AiOutlineHeart />
							</motion.div>
						)}
					</AnimatePresence>
				)}
			</Button>
		</motion.div>
	)
}
