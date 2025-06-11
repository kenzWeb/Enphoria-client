import {OrderHeading} from '@/entitles/order'
import { OrderTabs } from '@/features/order'

import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'

export const OrdersPage = () => {
	useBreadcrumbsAccount()

	return (
		<div>
			<OrderHeading />
			<OrderTabs />
		</div>
	)
}
