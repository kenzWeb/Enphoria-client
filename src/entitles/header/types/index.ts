import {NavigationItem} from '@/shared/types'

export interface NavigationMenuProps {
	items: NavigationItem[]
	isMobile: boolean
	onItemClick?: () => void
}

export interface HeaderNavProps {
	isOpen: boolean
	onClose: () => void
}
