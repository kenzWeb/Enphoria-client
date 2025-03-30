import {
	ShoppingCartCodeContinue,
	ShoppingCartCodeForm,
	ShoppingCartCodeHeader,
} from '@/entitles/shoppingCart'
import {useCodeForm} from '@/shared/hooks/api/useCodeForm'
import styles from './ShoppingCartCode.module.scss'

export const ShoppingCartCode = () => {
	const {form, onSubmit, isPending} = useCodeForm()
	return (
		<div className={styles.container}>
			<ShoppingCartCodeHeader />
			<ShoppingCartCodeForm
				form={form}
				onSubmit={onSubmit}
				isPending={isPending}
			/>
			<ShoppingCartCodeContinue />
		</div>
	)
}
