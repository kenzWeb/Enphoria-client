import {useEffect, useState} from 'react'
import HeaderForm from '../../../entitles/Header/HeaderForm/HeaderForm'
import CustomLink from '../../../shared/Buttons/CustomLink/CustomLink'
import styles from './styles.module.scss'
import Logo from '/img/Logo.svg'

type Props = {
	isOpen: boolean
}

const HeaderNav = ({isOpen}: Props) => {
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
					<CustomLink to='/auth'>
						<h2 className={styles.link}>Men</h2>
					</CustomLink>
					<CustomLink to='/auth'>
						<h2 className={styles.link}>Women</h2>
					</CustomLink>
					<CustomLink to='/auth'>
						<h2 className={styles.link}>Combos</h2>
					</CustomLink>
					<CustomLink to='/auth'>
						<h2 className={styles.link}>Joggers</h2>
					</CustomLink>
				</ul>
			</nav>
		</>
	)
}

export default HeaderNav
