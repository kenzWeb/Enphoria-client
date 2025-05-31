import {MOBILE_BREAKPOINT} from '@/shared/constants/navigation'
import {MobileMenuState} from '@/shared/types/navigation.interface'
import {useEffect, useState} from 'react'

interface UseMobileMenuProps {
	isOpen?: boolean
	onClose?: () => void
}

export const useMobileMenu = ({
	isOpen: externalIsOpen,
	onClose,
}: UseMobileMenuProps = {}): MobileMenuState & {
	handleClose: () => void
	setIsOpen: (value: boolean) => void
	handleLinkClick: () => void
} => {
	const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(
		typeof window !== 'undefined'
			? window.innerWidth <= MOBILE_BREAKPOINT
			: false,
	)

	const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Блокируем прокрутку страницы при открытом меню
	useEffect(() => {
		if (isOpen && isMobile) {
			const scrollY = window.scrollY
			document.body.style.overflow = 'hidden'
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'
		} else {
			const scrollY = document.body.style.top
			document.body.style.overflow = ''
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0') * -1)
			}
		}

		return () => {
			document.body.style.overflow = ''
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
		}
	}, [isOpen, isMobile])

	const handleClose = () => {
		if (onClose) {
			onClose()
		} else {
			setInternalIsOpen(false)
		}
	}

	const handleLinkClick = () => {
		if (isMobile) {
			handleClose()
		}
	}

	return {
		isOpen,
		isMobile,
		handleClose,
		setIsOpen: setInternalIsOpen,
		handleLinkClick,
	}
}
