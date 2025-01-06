interface BreadcrumbItem {
	name: string
	href: string
}

interface UseBreadcrumbsProps {
	items: BreadcrumbItem[]
	endPage: string
}

export const useBreadcrumbs = ({items, endPage}: UseBreadcrumbsProps) => {
	return {
		items,
		endPage,
	}
}
