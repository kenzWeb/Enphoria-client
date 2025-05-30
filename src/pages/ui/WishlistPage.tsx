import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'

export const WishlistPage = () => {
	useBreadcrumbsAccount()

	return (
		<div>
			<h1>Wishlist</h1>
			<p>Your favorite items...</p>
		</div>
	)
}
