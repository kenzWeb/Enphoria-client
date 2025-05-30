import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'

export const WishlistPage = () => {
	// Хук автоматически определит название страницы на основе пути
	useBreadcrumbsAccount()

	return (
		<div>
			<h1>Wishlist</h1>
			<p>Your favorite items...</p>
		</div>
	)
}
