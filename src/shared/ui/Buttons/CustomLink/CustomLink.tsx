import {useLocationActive} from '@/shared/hooks/useLocationActive'
import {Link} from 'react-router-dom'
import {ILink} from '../../../interface/types'
import styles from './styles.module.scss'

export const CustomLink = ({to, children}: ILink) => {
	const location = useLocationActive(to)

	return (
		<div>
			<Link className={location ? styles.linkActive : styles.link} to={to}>
				{children}
			</Link>
		</div>
	)
}
