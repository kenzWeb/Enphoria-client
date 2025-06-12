import {
	ShoppingCartCheckoutGrand,
	ShoppingCartCheckoutShipping,
	ShoppingCartCheckoutTop,
} from '@/entitles/shoppingCart'

import {useOrderCalculation} from '@/shared/hooks/useOrderCalculation'
import {Button} from '@/shared/shad-cn/ui/Button'
import {useNavigate} from 'react-router-dom'
import styles from './ShoppingCartCheckout.module.scss'

export const ShoppingCartCheckout = () => {
	const {totalPrice} = useOrderCalculation()
	const navigate = useNavigate()

	return (
		<section className={styles.container}>
			<div>
				<ShoppingCartCheckoutTop totalPrice={totalPrice} />
				<ShoppingCartCheckoutShipping />
				<ShoppingCartCheckoutGrand />
			</div>
			<div className={styles.buttonContainer}>
				<Button
					onClick={() => navigate('/account/checkout', {replace: true})}
					className={styles.checkoutButton}
					variant='violet'
					size='md'
				>
					Proceed To Checkout
				</Button>
			</div>
		</section>
	)
}
