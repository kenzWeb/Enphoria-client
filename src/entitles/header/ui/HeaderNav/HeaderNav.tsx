import {HeaderForm} from '@/entitles/header/ui/HeaderForm/HeaderForm'
import {CustomLink} from '@/shared/ui/Buttons'
import {useEffect, useState} from 'react'
import styles from './styles.module.scss'
import Logo from '/img/Logo.svg'

type Props = {
	isOpen: boolean
}

export const HeaderNav = ({isOpen}: Props) => {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 920)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 920)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<div className={styles.logo}>
				<img src={Logo} alt='' />
			</div>

			<nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
				{isMobile ? (
					<div>
						<HeaderForm />
					</div>
				) : null}
				<ul className={styles.list}>
					<CustomLink to='/'>
						<h2 className={styles.link}>Shop</h2>
					</CustomLink>
					<CustomLink to='/shop/?page=1&gender=male'>
						<h2 className={styles.link}>Men</h2>
					</CustomLink>
					<CustomLink to='/shop/?page=1&gender=female'>
						<h2 className={styles.link}>Women</h2>
					</CustomLink>
					<CustomLink to='/shop/?page=1&category=Tops'>
						<h2 className={styles.link}>Tops</h2>
					</CustomLink>
					<CustomLink to='/shop/?page=1&category=Boxers'>
						<h2 className={styles.link}>Boxers</h2>
					</CustomLink>
				</ul>
			</nav>
		</>
	)
}
