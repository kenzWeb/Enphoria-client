export interface NavigationItem {
	to: string
	label: string
	icon: string
}

export interface QuickAction {
	icon: string
	label: string
	to: string
}

export interface HeaderNavProps {
	isOpen: boolean
	onClose: () => void
}

export interface HeaderButtonsProps {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export interface MobileMenuState {
	isOpen: boolean
	isMobile: boolean
}
