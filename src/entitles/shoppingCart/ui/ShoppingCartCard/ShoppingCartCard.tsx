import {SERVER_URL} from '@/shared/config/private.config'
import {useFavorite} from '@/shared/hooks/api/useFavorite'
import {IProduct} from '@/shared/types/product.interface'
import {BiMinus} from 'react-icons/bi'
import {BsPlus} from 'react-icons/bs'
import {HiOutlineTrash} from 'react-icons/hi2'
import styles from './styles.module.scss'

type Props = {
	data: IProduct
}

export const ShoppingCartCard = ({data}: Props) => {
	console.log(data)

	const {mutate, isPending} = useFavorite(data)
	return (
		<>
			<div className={styles.container}>
				<div className={styles.base} key={data.id}>
					<img
						className={styles.img}
						src={`${SERVER_URL}${data.images[0]}`}
						alt={data.name}
					/>
					<div className={styles.info}>
						<h3 className={styles.title}>{data.name}</h3>
					</div>
				</div>
				<h2 className={styles.price}>${data.price}.00</h2>
				<div className={styles.quantity}>
					<button disabled className={styles.minus}>
						<BsPlus size={15} />
					</button>
					<span className={styles.count}>1</span>
					<button disabled className={styles.plus}>
						<BiMinus size={15} />
					</button>
				</div>
				<h2 className={styles.shipping}>free</h2>
				<h2 className={styles.total}>{data.price}.00</h2>
				<button
					className={styles.delete}
					onClick={() => mutate()}
					disabled={isPending}
				>
					<HiOutlineTrash color='#8A33FD' size={18} />
				</button>
			</div>
		</>
	)
}
