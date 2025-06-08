import {WishlistHeading} from '@/entitles/wishlist'
import {WishlistList} from '@/features/wishlist'
import {useProfile} from '@/shared/hooks/api/useProfile'

export const Wishlist = () => {
	const {user} = useProfile()
	return (
		<div>
			{user?.favorites?.length ? <WishlistHeading /> : null}

			<WishlistList />
		</div>
	)
}
