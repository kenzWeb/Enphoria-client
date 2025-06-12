import {useRef} from 'react'
import {BsPlayCircleFill} from 'react-icons/bs'

import {useVideoPlayer} from '@/shared/hooks/useVideoPlayer'
import {Button} from '@/shared/shad-cn/ui/Button'

import {VideoControls} from '../VideoControls/VideoControls'
import styles from './ProductDescriptionVideo.module.scss'
import Video from '/video/product.mp4'

export const ProductDescriptionVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [state, actions] = useVideoPlayer(videoRef)

	return (
		<div className={styles.videoContainer}>
			<div className={styles.videoWrapper}>
				<video
					ref={videoRef}
					className={styles.video}
					src={Video}
					playsInline
					onClick={actions.togglePlay}
				/>

				<Button
					variant='text'
					size='iconLg'
					className={`${styles.centerPlayButton} ${
						state.isPlaying ? styles.playing : ''
					}`}
					onClick={actions.togglePlay}
				>
					<BsPlayCircleFill />
				</Button>

				<VideoControls state={state} actions={actions} />
			</div>
		</div>
	)
}
