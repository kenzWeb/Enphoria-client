import {Link, useMatch} from 'react-router-dom'
import {ILink} from '../../interface/types'
import styles from './styles.module.scss'

export const CustomLink = ({to, children}: ILink) => {
	const math = useMatch(to)
	return (
		<div>
			<Link className={math ? styles.linkActive : styles.link} to={to}>
				{children}
			</Link>
		</div>
	)
}
