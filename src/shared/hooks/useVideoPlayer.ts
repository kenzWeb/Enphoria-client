import {VideoPlayerActions, VideoPlayerState} from '@/features/product/types'
import {RefObject, useEffect, useState} from 'react'

export const useVideoPlayer = (
	videoRef: RefObject<HTMLVideoElement>,
): [VideoPlayerState, VideoPlayerActions] => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isMuted, setIsMuted] = useState(false)
	const [progress, setProgress] = useState(0)
	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)

	useEffect(() => {
		if (videoRef.current) {
			const video = videoRef.current

			const setVideoDuration = () => {
				setDuration(video.duration)
			}

			const updateProgress = () => {
				setCurrentTime(video.currentTime)
				setProgress((video.currentTime / video.duration) * 100)
			}

			const handleVideoEnd = () => setIsPlaying(false)

			video.addEventListener('loadedmetadata', setVideoDuration)
			video.addEventListener('timeupdate', updateProgress)
			video.addEventListener('ended', handleVideoEnd)

			return () => {
				video.removeEventListener('loadedmetadata', setVideoDuration)
				video.removeEventListener('timeupdate', updateProgress)
				video.removeEventListener('ended', handleVideoEnd)
			}
		}
	}, [videoRef])

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted
			setIsMuted(!isMuted)
		}
	}

	const handleProgressChange = (newPosition: number) => {
		if (videoRef.current) {
			videoRef.current.currentTime = newPosition * videoRef.current.duration
		}
	}

	const toggleFullscreen = () => {
		if (videoRef.current) {
			if (document.fullscreenElement) {
				document.exitFullscreen()
			} else {
				videoRef.current.requestFullscreen()
			}
		}
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	return [
		{isPlaying, isMuted, progress, duration, currentTime},
		{
			togglePlay,
			toggleMute,
			handleProgressChange,
			toggleFullscreen,
			formatTime,
		},
	]
}
