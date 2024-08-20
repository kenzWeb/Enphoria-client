import {FooterCopy, FooterPopular, FooterSocials} from '@/entitles/footer'
import {FooterNav} from '@/features/footer'
import {FC} from 'react'
import styles from './styles.module.scss'

export const Footer: FC = () => {
	return (
		<div className={styles.container}>
			<footer className={styles.footer}>
				<FooterNav />
				<FooterSocials />
				<FooterPopular />
				<FooterCopy />
			</footer>
		</div>
	)
}
