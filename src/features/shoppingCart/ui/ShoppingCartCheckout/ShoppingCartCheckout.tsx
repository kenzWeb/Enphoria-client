import {
	ShoppingCartCheckoutGrand,
	ShoppingCartCheckoutShipping,
	ShoppingCartCheckoutTop,
} from '@/entitles/shoppingCart'

import {useCreatePayment} from '@/shared/hooks/api/useCreatePayment'
import {useOrderCalculation} from '@/shared/hooks/useOrderCalculation'
import {Button} from '@/shared/shad-cn/ui/Button'
import styles from './ShoppingCartCheckout.module.scss'
import { useProfile } from '@/shared/hooks/api/useProfile'
import { useNavigate } from 'react-router-dom'
import { PUBLIC_URL } from '@/shared/config/url.config'

export const ShoppingCartCheckout = () => {
	const {totalPrice} = useOrderCalculation()
	const {mutate, isPending} = useCreatePayment()
	const navigate = useNavigate()
	const {user} = useProfile()
	const handleClick = () => {
		user ? mutate() : navigate(PUBLIC_URL.auth())
	}

	return (
		<section className={styles.container}>
			<div>
				<ShoppingCartCheckoutTop totalPrice={totalPrice} />
				<ShoppingCartCheckoutShipping />
				<ShoppingCartCheckoutGrand />
			</div>
			<div>
				<Button
					onClick={handleClick}
					disabled={isPending}
					className='mt-[50px] text-center'
					variant='violet'
					size='md'
				>
					Proceed To Checkout
				</Button>
			</div>
		</section>
	)
}
