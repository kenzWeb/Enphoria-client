import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const Loader: React.FC = () => {
	return (
		<div className='flex items-center justify-center h-screen bg-gray-100'>
			<BeatLoader color='#d24ece' size={15} margin={2} />
		</div>
	)
}

export default Loader
