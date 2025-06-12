import {BreadcrumbsProvider, useBreadcrumbsContext} from '@/shared/contexts'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Menu} from '@/widgets/menu'
import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import styles from './AccountLayout.module.scss'
import MenuIcon from '/img/icons/menu.svg'

const AccountLayoutContent = () => {
	const {endPage, items} = useBreadcrumbsContext()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<div className={styles.container}>
			<Breadcrumbs items={items} endPage={endPage} />

			<button
				className={styles.mobileMenuToggle}
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
			>
				<img src={MenuIcon} alt='Menu' width='24' height='24' />
				Menu
			</button>

			<div className={styles.content}>
				<div
					className={`${styles.sidebar} ${
						isMobileMenuOpen ? styles.sidebarOpen : ''
					}`}
				>
					<Menu onItemClick={() => setIsMobileMenuOpen(false)} />
				</div>
				<div className={styles.main}>
					<Outlet />
				</div>
			</div>

			{isMobileMenuOpen && (
				<div
					className={styles.overlay}
					onClick={() => setIsMobileMenuOpen(false)}
				/>
			)}
		</div>
	)
}

export const AccountLayout = () => {
	return (
		<BreadcrumbsProvider
			defaultItems={[{name: 'Home', href: '/'}]}
			defaultEndPage='My Account'
		>
			<AccountLayoutContent />
		</BreadcrumbsProvider>
	)
}
