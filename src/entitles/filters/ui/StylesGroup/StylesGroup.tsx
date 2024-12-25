import {Accordion} from '@/features/filters'
import {useGetStyles} from '@/shared/hooks/queries/styles/useGetStyles'
import {Checkbox} from '@/shared/shad-cn/ui/Checkbox'
import {Label} from '@/shared/shad-cn/ui/Label'

import {useFilters} from '@/shared/hooks/useFilters'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'
import styles from './StylesGroup.module.scss'

export const StylesGroup = () => {
	interface Style {
		id: number
		name: string
	}

	const {styles: style} = useGetStyles() as {styles: Style[]}
	const {queryParams, updateQueryParams} = useFilters()

	return (
		<SideSubTitle title='Styles'>
			{(isOpen: boolean) => (
				<div className={styles.wrapper}>
					<Accordion isOpen={isOpen}>
						<div className={styles.container}>
							{style.map((item) => (
								<div key={item.id} className='flex items-center space-x-4'>
									<Checkbox
										className={styles.checkbox}
										id={item.name}
										checked={queryParams.style?.includes(item.name) || false}
										onCheckedChange={() => {
											const currentStyles = queryParams.style
												? queryParams.style.split('|')
												: []

											if (currentStyles.includes(item.name)) {
												const newArray = currentStyles.filter(
													(s) => s !== item.name,
												)
												updateQueryParams('style', newArray.join('|'))
											} else {
												updateQueryParams(
													'style',
													[...currentStyles, item.name].join('|'),
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
					</Accordion>
				</div>
			)}
		</SideSubTitle>
	)
}
