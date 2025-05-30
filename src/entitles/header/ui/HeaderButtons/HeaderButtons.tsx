import {HeaderBurger} from '@/features/header'
import {PUBLIC_URL} from '@/shared/config/url.config'
import {CustomButtonLink} from '@/shared/ui/Buttons'
import {LucideUser2} from 'lucide-react'
import {useEffect, useState} from 'react'
import {IoMdHeartEmpty} from 'react-icons/io'
import {LuShoppingCart} from 'react-icons/lu'
import {HeaderForm} from '../HeaderForm/HeaderForm'
import styles from './styles.module.scss'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export const HeaderButtons = ({isOpen, setIsOpen}: Props) => {
	const [iconSize, setIconSize] = useState<number>(20)

	useEffect(() => {
		const updateIconSize = () => {
			if (window.innerWidth >= 1600) {
				setIconSize(28)
			} else if (window.innerWidth >= 1400) {
				setIconSize(24)
			} else {
				setIconSize(20)
			}
		}

		updateIconSize()
		window.addEventListener('resize', updateIconSize)
		return () => window.removeEventListener('resize', updateIconSize)
	}, [])

	return (
		<>
			<div className={styles.form}>
				<HeaderForm />
			</div>

			<div className={styles.link}>
				<CustomButtonLink to={PUBLIC_URL.account('wishlist')}>
					<IoMdHeartEmpty size={iconSize} />
				</CustomButtonLink>
				<CustomButtonLink to={PUBLIC_URL.account('profile')}>
					<LucideUser2 size={iconSize} />
				</CustomButtonLink>
				<CustomButtonLink to={PUBLIC_URL.cart()}>
					<LuShoppingCart size={iconSize} />
				</CustomButtonLink>
			</div>
			<div className={styles.burger}>
				<HeaderBurger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	)
}

export default HeaderButtons
