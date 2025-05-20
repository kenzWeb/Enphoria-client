import {SERVER_URL} from '@/shared/config/private.config'

import {PUBLIC_URL} from '@/shared/config/url.config'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/shad-cn/ui/Tooltip'
import styles from './styles.module.scss'

export const Socials = () => {
	const handleExternalRedirect = (url: string) => {
		window.location.href = url
	}

	return (
		<div className={styles.container}>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger
						className={styles.button}
						onClick={() => handleExternalRedirect(`${SERVER_URL}/auth/google`)}
					>
						<img
							className={styles.img}
							src='/img/icons/socials/google.svg'
							alt='google'
						/>
						<h2>Continue With Google</h2>
					</TooltipTrigger>
					<TooltipContent className={styles.tooltip}>
						<p>Sign with Google</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger
						className={styles.button}
						onClick={() =>
							handleExternalRedirect(
								`${SERVER_URL}${PUBLIC_URL.auth('yandex')}`,
							)
						}
					>
						<img
							className={styles.img}
							src='/img/icons/socials/yandex.svg'
							alt='yandex'
						/>
						<h2>Continue With Yandex</h2>
					</TooltipTrigger>
					<TooltipContent className={styles.tooltip}>
						<p>Sign with Yandex</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
