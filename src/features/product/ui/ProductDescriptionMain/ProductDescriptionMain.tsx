import {IProductDescriptionMainProps} from '../../types'
import styles from './ProductDescriptionMain.module.scss'

export const ProductDescriptionMain = ({
	text,
}: IProductDescriptionMainProps) => {
	return (
		<div>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
