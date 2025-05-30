import {useContext} from 'react'
import {BreadcrumbsContext} from '../types/breadcrumbs.context.interface'

export const useBreadcrumbsContext = () => {
	const context = useContext(BreadcrumbsContext)
	if (!context) {
		throw new Error(
			'useBreadcrumbsContext must be used within BreadcrumbsProvider',
		)
	}
	return context
}
