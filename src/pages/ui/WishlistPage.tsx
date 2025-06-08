import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import {Wishlist} from '@/widgets/wishilist'

export const WishlistPage = () => {
	useBreadcrumbsAccount()

	return (
		<>
			<Wishlist />
		</>
	)
}
