import {WishlistItem} from '@/entitles/wishlist'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {WishListEmpty} from '@/widgets/wishilist'
import styles from './WishlistList.module.scss'

export const WishlistList = () => {
	const {user} = useProfile()

	return (
		<div className={styles.wrapper}>
			{user?.favorites?.length ? (
				<ul>
					{user.favorites.map((favorite) => (
						<WishlistItem
							key={favorite.id + favorite.name}
							favorite={favorite}
						/>
					))}
				</ul>
			) : (
				<WishListEmpty />
			)}
		</div>
	)
}
