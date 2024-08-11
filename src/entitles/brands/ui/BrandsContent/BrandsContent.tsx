import {Rating} from '@mui/material'
import styles from './styles.module.scss'

export const BrandsContent = () => {
	return (
		<div className={styles.container}>
			{Array.from({length: 5}, (_, i) => (
				<img
					className={styles.img}
					key={i}
					src={`img/images/brands/${i + 1}.jpg`}
					alt=''
				/>
			))}
			<Rating name='read-only' value={3} readOnly />
		</div>
	)
}
