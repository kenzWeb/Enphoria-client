import {useAppSelector} from '@/app/store/store'
import {Layout} from '@/widgets/layouts'

export const Favorites = () => {
	const favorites = useAppSelector((state) => state.favorite.favorite)
	console.log(favorites)
	return (
		<>
			<Layout>
				{favorites.map((item) => (
					<div key={item.id}>{item.name}</div>
				))}
			</Layout>
		</>
	)
}
