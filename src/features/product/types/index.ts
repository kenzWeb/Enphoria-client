export interface IProductDescriptionMainProps {
	text: string
}

export interface VideoPlayerState {
	isPlaying: boolean
	isMuted: boolean
	progress: number
	duration: number
	currentTime: number
}

export interface VideoPlayerActions {
	togglePlay: () => void
	toggleMute: () => void
	handleProgressChange: (newPosition: number) => void
	toggleFullscreen: () => void
	formatTime: (time: number) => string
}

export interface IVideoControlsProps {
	state: VideoPlayerState
	actions: VideoPlayerActions
}

export interface VideoProgressProps {
	progress: number
	onProgressChange: (position: number) => void
}
