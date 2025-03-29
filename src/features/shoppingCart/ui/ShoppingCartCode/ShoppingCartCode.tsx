import {
	ShoppingCartCodeForm,
	ShoppingCartCodeHeader,
} from '@/entitles/shoppingCart'
import styles from './ShoppingCartCode.module.scss'

export const ShoppingCartCode = () => {
	return (
		<div className={styles.container}>
			<ShoppingCartCodeHeader />
			<ShoppingCartCodeForm />
		</div>
	)
}
