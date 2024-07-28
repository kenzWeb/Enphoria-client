// components/Breadcrumb.js
import {Link, useLocation} from 'react-router-dom'
import styles from './styles.module.scss'

export const Breadcrumbs = () => {
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter((x) => x)

	return (
		<nav aria-label='breadcrumb'>
			<ol className={styles.breadcrumb}>
				<li className={styles.breadcrumbItem}>
					<Link to='/'>Home</Link>
				</li>
				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join('/')}`
					const isLast = index === pathnames.length - 1

					return isLast ? (
						<li
							key={to}
							className={`${styles.breadcrumbItem} ${styles.active}`}
							aria-current='page'
						>
							{value}
						</li>
					) : (
						<li key={to} className={styles.breadcrumbItem}>
							<Link to={to}>{value}</Link>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
