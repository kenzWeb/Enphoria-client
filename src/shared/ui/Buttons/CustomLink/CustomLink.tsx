import {Link, useMatch} from 'react-router-dom'
import {ILink} from '../../../interface/types'
import styles from './styles.module.scss'

export const CustomLink = ({to, children}: ILink) => {
	const match = useMatch({
		path: to.split('?')[0],
		end: true,
	})

	return (
		<div>
			<Link className={match ? styles.linkActive : styles.link} to={to}>
				{children}
			</Link>
		</div>
	)
}
