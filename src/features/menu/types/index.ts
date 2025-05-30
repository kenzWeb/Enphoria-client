import {To} from 'react-router-dom'

export interface MenuItem {
	id: number
	label: string
	route: To
	icon: string
}

export interface MenuBarProps {
	menuItems: MenuItem[]
}
