import {IBase} from '@/shared/types/types'
import {BiMinus} from 'react-icons/bi'
import {BsPlus} from 'react-icons/bs'
import {HiOutlineTrash} from 'react-icons/hi2'

import {useAppDispatch} from '@/app/store/store'
import {removeFromFavorite} from '@/shared/store/slices/favoriteSlice'
import {useCallback} from 'react'
import styles from './styles.module.scss'

type Props = {
	data: IBase
	cart: boolean
}

export const ShoppingCartCard = ({data, cart}: Props) => {
	const dispatch = useAppDispatch()

	const handleRemove = useCallback(() => {
		dispatch(removeFromFavorite(data))
	}, [dispatch, data])

	return (
		<>
			<div className={styles.container}>
				<div className={styles.base} key={data.id}>
					<img className={styles.img} src={data.img} alt={data.name} />
					<div className={styles.info}>
						<h3 className={styles.title}>{data.name}</h3>
						{cart ? (
							<>
								<p className={styles.color}>yellow</p>
								<p className={styles.size}>XXL</p>
							</>
						) : null}
					</div>
				</div>
				<h2 className={styles.price}>${data.price}.00</h2>
				<div className={styles.quantity}>
					<button disabled className={styles.minus}>
						<BsPlus size={15} />
					</button>
					<span className={styles.count}>{data.quantity}</span>
					<button disabled className={styles.plus}>
						<BiMinus size={15} />
					</button>
				</div>
				<h2 className={styles.shipping}>free</h2>
				<h2 className={styles.total}>
					{data.price !== undefined && data.quantity
						? `$${data.price * data.quantity}.00`
						: 'N/A'}
				</h2>
				<button className={styles.delete} onClick={handleRemove}>
					<HiOutlineTrash color='#8A33FD' size={18} />
				</button>
			</div>
		</>
	)
}
