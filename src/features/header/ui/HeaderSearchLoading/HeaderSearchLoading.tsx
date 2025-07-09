import {LoaderCircle} from 'lucide-react'

interface HeaderSearchLoadingProps {
	isLoading: boolean
}

export const HeaderSearchLoading = ({isLoading}: HeaderSearchLoadingProps) => {
	if (!isLoading) return null

	return (
		<LoaderCircle
			color='#d24ece'
			size={25}
			className='animate-spin absolute top-1/2 right-1/2'
		/>
	)
}
