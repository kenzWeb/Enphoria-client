import {FiltersList} from '@/features/filters'
import {useGetCategories} from '@/shared/hooks/queries/categories/useGetCategories'
import {ICategory} from '@/shared/types/category.interface'
import {SideTitle} from '../SideTitle/SideTitle'

export const CategoryGroup = () => {
	const {categories} = useGetCategories()

	return (
		<>
			<SideTitle />
			<FiltersList data={(categories ?? []) as ICategory[]} />
		</>
	)
}
