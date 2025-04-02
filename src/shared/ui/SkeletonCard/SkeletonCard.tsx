import {Skeleton} from '@/shared/shad-cn/ui/Skeleton'
import React from 'react'

export const SkeletonCard: React.FC = () => {
	return (
		<div className='w-full'>
			<Skeleton className='h-[370px] w-full rounded-[16px]' />
			<div className='space-y-3 mt-4'>
				<Skeleton className='h-6 w-[90%]' />
				<Skeleton className='h-6 w-[70%]' />
			</div>
		</div>
	)
}
