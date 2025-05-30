import {ReactNode, useState} from 'react'
import {BreadcrumbsContext} from '../types/breadcrumbs.context.interface'

interface BreadcrumbItem {
	name: string
	href: string
}

interface BreadcrumbsProviderProps {
	children: ReactNode
	defaultItems?: BreadcrumbItem[]
	defaultEndPage?: string
}

export const BreadcrumbsProvider = ({
	children,
	defaultItems = [{name: 'Home', href: '/'}],
	defaultEndPage = 'My Account',
}: BreadcrumbsProviderProps) => {
	const [endPage, setEndPage] = useState(defaultEndPage)
	const [items, setItems] = useState(defaultItems)

	return (
		<BreadcrumbsContext.Provider value={{endPage, setEndPage, items, setItems}}>
			{children}
		</BreadcrumbsContext.Provider>
	)
}
