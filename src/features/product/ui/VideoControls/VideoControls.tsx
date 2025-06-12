import {Button} from '@/shared/shad-cn/ui/Button'
import {BiFullscreen} from 'react-icons/bi'
import {BsPauseFill, BsPlayFill} from 'react-icons/bs'
import {IoMdVolumeHigh, IoMdVolumeOff} from 'react-icons/io'

import {IVideoControlsProps, VideoProgressProps} from '../../types'
import styles from './VideoControls.module.scss'

export const VideoControls: React.FC<IVideoControlsProps> = ({
	state,
	actions,
}) => {
	const {isPlaying, isMuted, progress, duration, currentTime} = state
	const {togglePlay, toggleMute, toggleFullscreen, formatTime} = actions

	return (
		<div className={styles.controls}>
			<div className={styles.topControls}>
				<Button
					variant='text'
					size='iconSm'
					className={styles.playButton}
					onClick={togglePlay}
				>
					{isPlaying ? <BsPauseFill /> : <BsPlayFill />}
				</Button>

				<div className={styles.timeDisplay}>
					<span>{formatTime(currentTime)}</span>
					<span> / </span>
					<span>{formatTime(duration)}</span>
				</div>
			</div>

			<VideoProgress
				progress={progress}
				onProgressChange={actions.handleProgressChange}
			/>

			<div className={styles.bottomControls}>
				<Button
					variant='text'
					size='iconSm'
					className={styles.muteButton}
					onClick={toggleMute}
				>
					{isMuted ? <IoMdVolumeOff /> : <IoMdVolumeHigh />}
				</Button>

				<Button
					variant='text'
					size='iconSm'
					className={styles.fullscreenButton}
					onClick={toggleFullscreen}
				>
					<BiFullscreen />
				</Button>
			</div>
		</div>
	)
}

export const VideoProgress: React.FC<VideoProgressProps> = ({
	progress,
	onProgressChange,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const position = (e.clientX - rect.left) / rect.width
		onProgressChange(position)
	}

	return (
		<div className={styles.progressContainer} onClick={handleClick}>
			<div className={styles.progressBar} style={{width: `${progress}%`}} />
		</div>
	)
}
