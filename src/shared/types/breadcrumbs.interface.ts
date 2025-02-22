interface BreadcrumbItem {
	name: string
	href: string
}

export interface UseBreadcrumbsProps {
	items: BreadcrumbItem[]
	endPage: string
}
