import {ZoneCard} from '@/entitles/zone'
import {useGetZonesQuery} from '@/shared/store/api/zoneApi'
import style from './styles.module.scss'

export const ZoneWrapper = () => {
	const {data} = useGetZonesQuery()

	return (
		<section className={style.section}>
			{data?.map((item) => (
				<ZoneCard
					title={item.title}
					description={item.description}
					img={item.img}
					price={item.price}
					key={item.id}
					color={item.id == 4 || item.id == 5 ? 'black' : 'white'}
				/>
			))}
		</section>
	)
}
