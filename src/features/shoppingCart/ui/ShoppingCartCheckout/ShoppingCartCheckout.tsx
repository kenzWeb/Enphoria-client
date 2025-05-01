import {
	ShoppingCartCheckoutGrand,
	ShoppingCartCheckoutShipping,
	ShoppingCartCheckoutTop,
} from '@/entitles/shoppingCart'

import {useOrderCalculation} from '@/shared/hooks/useOrderCalculation'
import {Button} from '@/shared/shad-cn/ui/Button'
import styles from './ShoppingCartCheckout.module.scss'

export const ShoppingCartCheckout = () => {
	const {totalPrice} = useOrderCalculation()

	return (
		<section className={styles.container}>
			<div>
				<ShoppingCartCheckoutTop totalPrice={totalPrice} />
				<ShoppingCartCheckoutShipping />
				<ShoppingCartCheckoutGrand />
			</div>
			<div>
				<Button className='mt-[50px] text-center' variant='violet' size='md'>
					Proceed To Checkout
				</Button>
			</div>
		</section>
	)
}
