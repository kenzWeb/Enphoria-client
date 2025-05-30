import {HeaderBurger} from '@/features/header'
import {PUBLIC_URL} from '@/shared/config/url.config'
import {CustomButtonLink} from '@/shared/ui/Buttons'
import {LucideUser2} from 'lucide-react'
import {IoMdHeartEmpty} from 'react-icons/io'
import {LuShoppingCart} from 'react-icons/lu'
import {HeaderForm} from '../HeaderForm/HeaderForm'
import styles from './styles.module.scss'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export const HeaderButtons = ({isOpen, setIsOpen}: Props) => {
	return (
		<>
			<div className={styles.form}>
				<HeaderForm />
			</div>

			<div className={styles.link}>
				<CustomButtonLink to={PUBLIC_URL.account('wishlist')}>
					<IoMdHeartEmpty size={20} />
				</CustomButtonLink>
				<CustomButtonLink to={PUBLIC_URL.account('profile')}>
					<LucideUser2 size={20} />
				</CustomButtonLink>
				<CustomButtonLink to={PUBLIC_URL.cart()}>
					<LuShoppingCart size={20} />
				</CustomButtonLink>
			</div>
			<div className={styles.burger}>
				<HeaderBurger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	)
}

export default HeaderButtons
