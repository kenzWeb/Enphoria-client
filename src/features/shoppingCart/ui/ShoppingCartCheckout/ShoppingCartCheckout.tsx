import {
	ShoppingCartCheckoutGrand,
	ShoppingCartCheckoutShipping,
	ShoppingCartCheckoutTop,
} from '@/entitles/shoppingCart'

import {Button} from '@/shared/shad-cn/ui/Button'
import {useCartStore} from '@/shared/store/cart.store'
import {useCodeStore} from '@/shared/store/code.store'
import styles from './ShoppingCartCheckout.module.scss'

export const ShoppingCartCheckout = () => {
	const {totalPrice} = useCartStore().getCartSummary()
	const codeData = useCodeStore()

	return (
		<section className={styles.container}>
			<div>
				<ShoppingCartCheckoutTop totalPrice={totalPrice} />
				<ShoppingCartCheckoutShipping />
				<ShoppingCartCheckoutGrand
					totalPrice={totalPrice}
					codeData={codeData}
				/>
			</div>
			<div>
				<Button className='mt-[50px] text-center' variant='violet' size='md'>
					Proceed To Checkout
				</Button>
			</div>
		</section>
	)
}
