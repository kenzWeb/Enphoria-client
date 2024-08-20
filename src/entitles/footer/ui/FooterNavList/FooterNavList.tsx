import {FC} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
	heading: string
	lists: string[]
	to?: string | undefined
}

export const FooterNavList: FC<Props> = ({heading, lists, to}) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{heading}</h3>
			<ul className={styles.list}>
				{lists.map((list) => (
					<Link key={list} to={to ?? '/'}>
						<li className={styles.item}>{list}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
