import {HeaderSearchDialog, HeaderSearchTrigger} from '@/features/header'
import {useGetAllProducts} from '@/shared/hooks/queries/products/useGetAllProducts'
import {useDebounce} from '@/shared/hooks/useDebounce'
import {IProduct} from '@/shared/types/product.interface'
import {useEffect, useState} from 'react'

export const HeaderForm = () => {
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState('')
	const [data, setData] = useState<IProduct[]>([])
	const debouncedValue = useDebounce(search, 500)
	const {products, isFetching, isLoading, isRefetching, isPending} =
		useGetAllProducts({
			searchTerm: debouncedValue,
		})

	useEffect(() => {
		if (products) setData(products)
	}, [products])

	const handleSearch = (value: string) => {
		setSearch(value)
		if (!open) setOpen(true)
	}

	const isSearchLoading = isLoading || isFetching || isRefetching || isPending

	return (
		<>
			<HeaderSearchTrigger
				search={search}
				onSearchChange={handleSearch}
				onOpen={() => setOpen(true)}
			/>

			<HeaderSearchDialog
				open={open}
				onOpenChange={setOpen}
				search={search}
				onSearchChange={handleSearch}
				data={data}
				isLoading={isSearchLoading}
			/>
		</>
	)
}
