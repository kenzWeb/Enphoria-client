import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useFilterStore} from '../store/filter.store'
import {IProductFilters} from '../types/product.interface'

export function useFilters() {
	const [searchParams, setSearchParams] = useState<URLSearchParams>(
		new URLSearchParams(window.location.search),
	)
	const navigate = useNavigate()

	const {queryParams, isFilterUpdated, updateQueryParam} = useFilterStore()

	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof IProductFilters,
				value,
			})
		})
	}, [])

	const updateQueryParams = (key: keyof IProductFilters, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())

		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}

		const newUrl = `${window.location.pathname}?${newParams.toString()}`
		navigate(newUrl, {replace: true})

		setSearchParams(newParams)
		updateQueryParam({key, value})
	}

	return {
		updateQueryParams,
		queryParams,
		isFilterUpdated,
	}
}
