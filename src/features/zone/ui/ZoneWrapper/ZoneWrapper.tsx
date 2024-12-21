import {ZoneCard} from '@/entitles/zone'
import {SERVER_URL} from '@/shared/config/private.config'
import {useGetAllZone} from '@/shared/hooks/queries/zone/useGetZone'
import {Skeleton} from '@mui/material'
import style from './styles.module.scss'

export const ZoneWrapper = () => {
	const {zone, isLoading} = useGetAllZone()

	if (isLoading) {
		return (
			<section className={style.section}>
				<Skeleton />
			</section>
		)
	}

	return (
		<section className={style.section}>
			{zone?.map((item) => (
				<ZoneCard
					title={item.title}
					description={item.description}
					img={`${SERVER_URL}${item.img}`}
					price={item.price}
					key={item.id}
					color={item.title == '' || item.id == '5' ? 'black' : 'white'}
				/>
			))}
		</section>
	)
}
