import {useDebounce} from '@/shared/hooks/useDebounce'
import {Badge} from '@/shared/shad-cn/ui/Badge'
import {Slider} from '@/shared/shad-cn/ui/Slider'

import {type FC, useEffect, useState} from 'react'

interface IRange {
	min?: number
	max: number
	fromInitialValue?: number
	toInitialValue?: number
	onChangeFromValue: (value: number) => void
	onChangeToValue: (value: number) => void
}

export const Range: FC<IRange> = ({
	min = 0,
	max,
	onChangeFromValue,
	onChangeToValue,
	fromInitialValue = 0,
	toInitialValue = max,
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue)
	const [toValue, setToValue] = useState(toInitialValue)

	useEffect(() => {
		setFromValue(fromInitialValue)
		setToValue(toInitialValue)
	}, [fromInitialValue, toInitialValue])

	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])

	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])

	return (
		<div className='w-full px-1'>
			<Slider
				defaultValue={[fromValue, toValue]}
				max={max}
				min={min}
				step={1}
				value={[fromValue, toValue]}
				onValueChange={(value) => {
					setFromValue(value[0])
					setToValue(value[1])
				}}
			/>
			<div className='flex justify-around text-base text-[16px] mt-[24px]'>
				<Badge variant='priceOutline'>${fromValue}</Badge>
				<Badge variant='priceOutline'>${toValue}</Badge>
			</div>
		</div>
	)
}
