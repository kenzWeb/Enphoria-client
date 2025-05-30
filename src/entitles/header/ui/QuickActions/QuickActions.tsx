import {QuickAction} from '@/shared/types/navigation.interface'
import {FC} from 'react'
import {FiHeart, FiShoppingBag, FiUser} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import styles from './QuickActions.module.scss'

interface QuickActionsProps {
	actions: QuickAction[]
	onActionClick?: () => void
}

const iconMap = {
	FiUser,
	FiHeart,
	FiShoppingBag,
}

export const QuickActions: FC<QuickActionsProps> = ({
	actions,
	onActionClick,
}) => {
	return (
		<div className={styles.quickActions}>
			{actions.map((action) => {
				const IconComponent = iconMap[action.icon as keyof typeof iconMap]
				return (
					<Link
						key={action.label}
						to={action.to}
						onClick={onActionClick}
						className={styles.quickAction}
					>
						{IconComponent && <IconComponent size={20} />}
						<span>{action.label}</span>
					</Link>
				)
			})}
		</div>
	)
}
