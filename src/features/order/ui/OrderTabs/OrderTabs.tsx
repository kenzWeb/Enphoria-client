import {useGetMyOrder} from '@/shared/hooks/queries/order/useGetMyOrder'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/shad-cn/ui/Tabs'
import {EnumOrderStatus, IOrder} from '@/shared/types/order.interface'
import {orderModels} from '../../models'
import styles from './OrderTabs.module.scss'
import { Button } from '@/shared/shad-cn/ui/Button'

export const OrderTabs = () => {
	const {orders} = useGetMyOrder()
	console.log('Orders:', orders)

	return (
		<Tabs defaultValue={EnumOrderStatus.PENDING} className={styles.container}>
			<TabsList className={styles.tabsList}>
				{orderModels.map((model) => (
					<TabsTrigger
						key={model.name}
						value={model.status}
						className={styles.tabsTrigger}
					>
						{model.name}
					</TabsTrigger>
				))}
			</TabsList>
			{orderModels.map((model) => (
				<TabsContent
					key={model.name}
					value={model.status}
					className={styles.tabsContent}
				>
					{orders
						.filter((order: IOrder) => order.status === model.status)
						.map((order: IOrder) => (
							<div key={order.id} className={styles.orderItem}>
								<div className={styles.orderDetails}>
									<h2 className={styles.orderTitle}>Order no: #{order.id}</h2>
									<h3 className={styles.orderStatus}>
										Order Date:
										<span>
											{new Date(order.createdAt).toLocaleDateString()}
										</span>
									</h3>
								</div>
								<Button size={'md'} variant={'violet'} className={styles.orderActions}>View Detail</Button>
							</div>
						))}
				</TabsContent>
			))}
		</Tabs>
	)
}
