import {NAVIGATION_ITEMS, QUICK_ACTIONS} from '@/shared/constants/navigation'
import {NavigationItem, QuickAction} from '@/shared/types/navigation.interface'

export const getNavigationItems = (): NavigationItem[] => {
	return NAVIGATION_ITEMS.map((item) => ({
		to: item.to,
		label: item.label,
		icon: item.icon,
	}))
}

export const getQuickActions = (): QuickAction[] => {
	return QUICK_ACTIONS.map((action) => ({
		icon: action.icon,
		label: action.label,
		to: action.to,
	}))
}
