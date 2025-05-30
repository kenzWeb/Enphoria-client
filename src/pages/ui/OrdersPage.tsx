import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'

export const OrdersPage = () => {
	// Хук автоматически определит название страницы на основе пути
	useBreadcrumbsAccount()

	return (
		<div>
			<h1>My Orders</h1>
			<p>Here are your orders...</p>
		</div>
	)
}
