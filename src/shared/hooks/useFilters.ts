import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useFilterStore} from '../store/filter.store'
import {IProductFilters} from '../types/product.interface'

export function useFilters() {
	const location = useLocation()
	const navigate = useNavigate()
	const {queryParams, isFilterUpdated, updateQueryParam} = useFilterStore()

	const searchParams = new URLSearchParams(location.search)

	useEffect(() => {
		Object.keys(queryParams).forEach((key) => {
			updateQueryParam({
				key: key as keyof IProductFilters,
				value: '',
			})
		})

		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof IProductFilters,
				value,
			})
		})
	}, [location.search])

	const updateQueryParams = (key: keyof IProductFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())
		newParams.set('page', '1')

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		navigate(`${location.pathname}?${newParams.toString()}`, {replace: true})
		updateQueryParam({key, value})
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated,
	}
}
