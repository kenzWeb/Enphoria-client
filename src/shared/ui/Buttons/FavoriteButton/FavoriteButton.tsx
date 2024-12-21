import {useFavorite} from '@/shared/hooks/api/useFavorite'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {Button} from '@/shared/shad-cn/ui/Button'
import {IProduct} from '@/shared/types/product.interface'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import styles from './styles.module.scss'

interface FavoriteButtonProps {
	product: IProduct
}

export const FavoriteButton = ({product}: FavoriteButtonProps) => {
	const {user} = useProfile()

	const {mutate, isPending} = useFavorite(product)

	if (!user) return null

	const isExists = user.favorites.some((favorite) => favorite.id === product.id)

	return (
		<Button
			variant='favorite'
			size='favorite'
			onClick={() => mutate()}
			className={styles.favoriteButton}
			disabled={isPending}
		>
			{isExists ? (
				<div>
					<AiFillHeart color='#F43F5E' className={styles.favorite} />
				</div>
			) : (
				<div>
					<AiOutlineHeart />
				</div>
			)}
		</Button>
	)
}
