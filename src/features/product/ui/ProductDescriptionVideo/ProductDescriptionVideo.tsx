import {useRef} from 'react'

import {useVideoPlayer} from '@/shared/hooks/useVideoPlayer'

import styles from './ProductDescriptionVideo.module.scss'
import Video from '/video/product.mp4'
import { VideoControls } from '../VideoControls/VideoControls'

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

				<VideoControls state={state} actions={actions} />
			</div>
		</div>
	)
}
