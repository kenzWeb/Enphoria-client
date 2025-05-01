import {OrderSummaryItem} from '@/entitles/order'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {useCartStore} from '@/shared/store/cart.store'
import {Loader} from '@/shared/ui/Other'
import styles from './OrdeSummaryItems.module.scss'

export const OrderSummaryItems = () => {
	const {isLoading, isFetching, isPending, user} = useProfile()

	const items = useCartStore((state) => state.cart)
	return (
		<div className={styles.container}>
			{isLoading || isPending || isFetching ? (
				<div className='w-full h-full flex items-center justify-center'>
					<Loader />
				</div>
			) : !user ? (
				<h2 className='text-center text-[16px]'>
					Please login to see your order
				</h2>
			) : !items.length ? (
				<h2 className='text-center text-[16px]'>Your order is empty</h2>
			) : (
				items.map((item) => <OrderSummaryItem data={item} key={item.id} />)
			)}
		</div>
	)
}
