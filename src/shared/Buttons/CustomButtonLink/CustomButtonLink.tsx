import {Link, useMatch} from 'react-router-dom'
import {ILink} from '../../interface/types'
import styles from './styles.module.scss'

const CustomButtonLink = ({children, to}: ILink) => {
	const match = useMatch(to)

	return (
		<Link to={to}>
			<button className={match ? styles.buttonActive : styles.button}>
				{children}
			</button>
		</Link>
	)
}

export default CustomButtonLink
