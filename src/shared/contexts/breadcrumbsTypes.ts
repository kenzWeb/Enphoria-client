import {createContext} from 'react'

interface BreadcrumbItem {
	name: string
	href: string
}

interface BreadcrumbsContextType {
	endPage: string
	setEndPage: (page: string) => void
	items: BreadcrumbItem[]
	setItems: (items: BreadcrumbItem[]) => void
}

export const BreadcrumbsContext = createContext<
	BreadcrumbsContextType | undefined
>(undefined)
