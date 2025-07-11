import { Button } from '@/shared/shad-cn/ui/index'
import { Link } from 'react-router-dom'
import styles from './ShoppingCartCodeContinue.module.scss'

export const ShoppingCartCodeContinue = () => {
	return (
		<Link to={'/shop'} replace className={styles.navigate}>
			<Button className={styles.button} variant='secondary' size='default'>
				Continue shopping
			</Button>
		</Link>
	)
}
;``
