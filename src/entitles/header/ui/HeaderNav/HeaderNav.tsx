import {HeaderForm} from '@/entitles/header/ui/HeaderForm/HeaderForm'
import {useMobileMenu} from '@/shared/hooks/useMobileMenu'
import {HeaderNavProps} from '@/shared/types'
import {getNavigationItems, getQuickActions} from '../../model/navigation'
import {Logo} from '../Logo/Logo'
import {MobileFooter} from '../MobileFooter/MobileFooter'
import {MobileHeader} from '../MobileHeader/MobileHeader'
import {MobileOverlay} from '../MobileOverlay/MobileOverlay'
import {NavigationMenu} from '../NavigationMenu/NavigationMenu'
import {QuickActions} from '../QuickActions/QuickActions'
import styles from './styles.module.scss'

export const HeaderNav = ({isOpen, onClose}: HeaderNavProps) => {
	const {isMobile, handleLinkClick} = useMobileMenu({isOpen, onClose})

	const navigationItems = getNavigationItems()
	const quickActions = getQuickActions()

	return (
		<>
			{!isMobile && <Logo />}

			{isMobile && isOpen && <MobileOverlay onClose={onClose} />}

			<nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
				{isMobile && (
					<>
						<MobileHeader onClose={onClose} />

						<div className={styles.searchSection}>
							<HeaderForm />
						</div>

						<QuickActions
							actions={quickActions}
							onActionClick={handleLinkClick}
						/>

						<div className={styles.divider} />
					</>
				)}

				<NavigationMenu
					items={navigationItems}
					isMobile={isMobile}
					onItemClick={handleLinkClick}
				/>

				{isMobile && <MobileFooter />}
			</nav>
		</>
	)
}
