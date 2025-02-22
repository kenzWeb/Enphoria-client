import {UseBreadcrumbsProps} from '../types/breadcrumbs.interface'

export const useBreadcrumbs = ({items, endPage}: UseBreadcrumbsProps) => {
	return {
		items,
		endPage,
	}
}
