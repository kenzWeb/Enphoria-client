import {useId} from 'react'
import styles from './styles.module.scss'

export const BrandsContent = () => {
	const id = useId()

	return (
		<div className={styles.container}>
			{Array.from({length: 5}, (_, i) => (
				<img className={styles.img} key={id} src={`img/images/brands/${i + 1}.jpg`} alt='' />
			))}
		</div>
	)
}
