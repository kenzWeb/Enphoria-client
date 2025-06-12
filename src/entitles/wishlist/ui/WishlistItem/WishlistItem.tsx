import {SERVER_URL} from '@/shared/config/private.config'
import {handleAddToCart} from '@/shared/handles/handleAddToCart'
import {useFavorite} from '@/shared/hooks/api/useFavorite'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {Button} from '@/shared/shad-cn/ui/Button'
import {useCartStore} from '@/shared/store/cart.store'
import {WishlistItemProps} from '../../types'
import styles from './WishlistItem.module.scss'

export const WishlistItem = ({favorite}: WishlistItemProps) => {
	const {mutate, isPending} = useFavorite(favorite)
	const {addToCart} = useCartStore()
	const {user} = useProfile()

	return (
		<div className={styles.wrapper}>
			<Button
				variant='close'
				size='icon'
				disabled={isPending}
				onClick={() => mutate()}
				className={styles.closeButton}
			>
				<img src='/img/icons/closeCross.svg' alt='' />
			</Button>
			<img
				className={styles.image}
				src={`${SERVER_URL}${favorite.images[0]}`}
				alt=''
			/>
			<div className={styles.info}>
				<h2 className={styles.title}>{favorite.name}</h2>
				<h2 className={styles.color}>
					Color:{' '}
					{favorite.productColors?.map((color) => (
						<span key={color.color?.id}>{color.color?.name}, </span>
					))}
				</h2>
				<h2 className={styles.quantity}>
					Quantity: <span>1</span>
				</h2>
			</div>

			<div className={styles.lastInfo}>
				<h2 className={styles.price}>${favorite.price}.00</h2>
				<Button
					onClick={() =>
						handleAddToCart({
							selectedSize: favorite.productSizes?.[0]?.size?.name || '',
							selectedColor: favorite.productColors?.[0]?.color?.name || '',
							product: favorite,
							user,
							addToCart,
						})
					}
					size={'lg'}
					variant={'violet'}
					className={styles.button}
				>
					Add to cart
				</Button>
			</div>
		</div>
	)
}
