import {useAppDispatch, useAppSelector} from '@/app/store/store'
import {addToFavorite} from '@/shared/store/slices/favoriteSlice'
import {IBase} from '@/shared/types/types'
import {useCallback, useMemo} from 'react'
import {FaHeart} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

interface Props extends IBase {
	borderRadius?: string
	favorite?: boolean
}

export const CategoriesCard = ({borderRadius, favorite, ...props}: Props) => {
	const dispatch = useAppDispatch()
	const favorites = useAppSelector((state) => state.favorite.favorite)

	const CurrentFavorite = useMemo(
		() => favorites.find((item) => item.id === props.id),
		[favorites, props.id],
	)

	const handleFavoriteClick = useCallback(() => {
		dispatch(addToFavorite(props))
	}, [dispatch, props])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<img
					className={styles.img}
					style={{borderRadius: borderRadius}}
					src={props.img}
					alt={props.name}
				/>
				{favorite ? (
					<button className={styles.favorite} onClick={handleFavoriteClick}>
						{CurrentFavorite ? <FaHeart size={12} /> : <FiHeart size={12} />}
					</button>
				) : null}
			</div>

			<div className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>{props.type}</h2>
					<h3 className={styles.subtitle}>Explore Now!</h3>
				</div>
				<div className={styles.arrow}>
					<Link to={'/'}>
						<IoIosArrowRoundForward className={styles.icon} size={30} />
					</Link>
				</div>
			</div>
		</div>
	)
}
