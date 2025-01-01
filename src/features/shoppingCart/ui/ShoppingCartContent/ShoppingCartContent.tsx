import {ShoppingCartCard} from '@/entitles/shoppingCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {getAccessToken} from '@/shared/services/auth/auth-token.service'
import styles from './styles.module.scss'
import { Loader2 } from 'lucide-react'

export const ShoppingCartContent = () => {
    const {user, isLoading, isFetching, isPending} = useProfile()
    
    if (!getAccessToken()) {
        return <h2 className={styles.empty}>Please login to see your shopping cart</h2>
    }

		if (isLoading || isPending || isFetching) {
			return (
				<div className="w-full h-full flex items-center justify-center">
					<Loader2 className='animate-spin' />
				</div>
			)
		}

    if (!user?.favorites?.length) {
        return <h2 className={styles.empty}>Your shopping cart is empty</h2>
    }

    return (
        <div className={styles.container}>
            {user.favorites.map((item) => (
                <ShoppingCartCard data={item} key={item.id} />
            ))}
        </div>
    )
}
