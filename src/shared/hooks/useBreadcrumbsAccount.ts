import {useBreadcrumbsContext} from '@/shared/contexts'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

interface BreadcrumbItem {
	name: string
	href: string
}

interface UseBreadcrumbsAccountProps {
	endPage?: string
	items?: BreadcrumbItem[]
}

// Маппинг путей к названиям страниц
const PAGE_TITLES: Record<string, string> = {
	'/account/profile': 'My Info',
	'/account/orders': 'My Orders',
	'/account/wishlist': 'Wishlist',
}

export const useBreadcrumbsAccount = ({
	endPage,
	items,
}: UseBreadcrumbsAccountProps = {}) => {
	const {setEndPage, setItems} = useBreadcrumbsContext()
	const location = useLocation()

	useEffect(() => {
		// Автоматически определяем название страницы на основе пути
		const pageTitle = endPage || PAGE_TITLES[location.pathname] || 'My Account'

		// Устанавливаем базовые элементы breadcrumbs, если не переданы кастомные
		const defaultItems = items || [
			{name: 'Home', href: '/'},
			{name: 'My Account', href: '/account'},
		]

		setEndPage(pageTitle)
		setItems(defaultItems)
	}, [endPage, items, location.pathname, setEndPage, setItems])
}
