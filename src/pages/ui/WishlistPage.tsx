import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import {Wishlist} from '@/widgets/wishilist'
import styles from './WishlistPage.module.scss'

export const WishlistPage = () => {
	useBreadcrumbsAccount()

	return (
		<div className={styles.container}>
			<Wishlist />
		</div>
	)
}
