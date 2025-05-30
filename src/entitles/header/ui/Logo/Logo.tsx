import {FC} from 'react'
import styles from './Logo.module.scss'
import LogoImage from '/img/Logo.svg'

interface LogoProps {
	className?: string
	size?: 'small' | 'medium' | 'large'
}

export const Logo: FC<LogoProps> = ({className, size = 'medium'}) => {
	return (
		<div className={`${styles.logo} ${styles[size]} ${className || ''}`}>
			<img src={LogoImage} alt='Euphoria' />
		</div>
	)
}
