import {useContext} from 'react'
import {BreadcrumbsContext} from './breadcrumbsTypes'

export const useBreadcrumbsContext = () => {
	const context = useContext(BreadcrumbsContext)
	if (!context) {
		throw new Error(
			'useBreadcrumbsContext must be used within BreadcrumbsProvider',
		)
	}
	return context
}
