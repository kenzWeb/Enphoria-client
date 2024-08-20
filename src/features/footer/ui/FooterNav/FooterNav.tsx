import {FooterNavList} from '@/entitles/footer'
import React from 'react'
import styles from './styles.module.scss'

export const FooterNav: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<FooterNavList
				heading='Need Help'
				lists={[
					'Contact Us',
					'Track Order',
					'Returns & Refunds',
					'FAQ',
					'Career',
				]}
			/>
			<FooterNavList
				heading='Company'
				lists={[
					'About Us',
					'euphoria Blog',
					'euphoriastan',
					'Collaboration',
					'Media',
				]}
			/>
			<FooterNavList
				heading='More Info'
				lists={[
					'Term and Conditions',
					'Privacy Policy',
					'Shipping Policy',
					'Sitemap',
				]}
			/>
			<FooterNavList
				heading='Location'
				lists={[
					'support@euphoria.in',
					'Eklingpura Chouraha, Ahmedabad Main Road',
					'(NH 8- Near Mahadev Hotel) Udaipur, India- 313002',
				]}
			/>
		</nav>
	)
}
