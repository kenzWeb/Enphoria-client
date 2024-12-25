import {useCallback, useEffect, useState} from 'react'
import {FilterParamName, QueryParams} from '../types/filter.interface'
import {useFilters} from './useFilters'

export const useFilterToggle = (paramName: FilterParamName) => {
	const {queryParams, updateQueryParams} = useFilters()
	const [selectedItems, setSelectedItems] = useState<string[]>([])

	const parseQueryParam = (param: QueryParams[FilterParamName]): string[] => {
		if (!param) return []
		return typeof param === 'string' ? param.split('|') : param
	}

	useEffect(() => {
		if (!queryParams[paramName]) {
			setSelectedItems([])
			return
		}

		const parsedItems = parseQueryParam(queryParams[paramName])
		if (parsedItems.length === 0) {
			setSelectedItems([])
			return
		}

		setSelectedItems(parsedItems)
	}, [queryParams[paramName], paramName])

	const toggleItem = useCallback(
		(item: string) => {
			const currentItems = parseQueryParam(queryParams[paramName])

			if (currentItems.includes(item)) {
				const newArray = currentItems.filter((c) => c !== item)
				updateQueryParams(paramName, newArray.join('|'))
			} else {
				updateQueryParams(paramName, [...currentItems, item].join('|'))
			}
		},
		[queryParams, paramName],
	)

	return {selectedItems, toggleItem} as const
}
