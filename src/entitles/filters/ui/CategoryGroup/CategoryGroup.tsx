import {useGetCategories} from '@/shared/hooks/queries/categories/useGetCategories'
import {useFilters} from '@/shared/hooks/useFilters'
import {Checkbox} from '@/shared/shad-cn/ui/Checkbox'
import {Label} from '@/shared/shad-cn/ui/Label'
import {ICategory} from '@/shared/types/category.interface'
import {SideTitle} from '../SideTitle/SideTitle'
import styles from './CategoryGroup.module.scss'

export const CategoryGroup = () => {
	const {categories: categoriesData = []} = useGetCategories()
	const categories: ICategory[] = Array.isArray(categoriesData)
		? categoriesData
		: []
	const {queryParams, updateQueryParams} = useFilters()

	return (
		<>
			<SideTitle />
			<div className='pt-[4rem]'>
				<div className={styles.container}>
					{categories?.map((item) => (
						<div key={item.id} className='flex items-center space-x-4'>
							<Checkbox
								className={styles.checkbox}
								id={item.name}
								checked={queryParams.category?.includes(item.name) || false}
								onCheckedChange={() => {
									const currentCategory = queryParams.category
										? queryParams.category.split('|')
										: []

									if (currentCategory.includes(item.name)) {
										const newArray = currentCategory.filter(
											(s) => s !== item.name,
										)
										updateQueryParams('category', newArray.join('|'))
									} else {
										updateQueryParams(
											'category',
											[...currentCategory, item.name].join('|'),
										)
									}
								}}
							/>
							<Label className={styles.label} htmlFor={item.name}>
								{item.name}
							</Label>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
