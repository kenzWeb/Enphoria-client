import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './SideSubTitle.module.scss'

interface SideSubTitleProps {
    title: string;
    children?: (isOpen: boolean) => React.ReactNode;
}

export const SideSubTitle = ({ title, children }: SideSubTitleProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div 
                className={styles.wrapper} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className={styles.title}>{title}</h2>
                <motion.img
                    className={styles.img}
                    src='/img/icons/arrowTop.svg'
                    alt='filterTitle'
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
            </div>
            {children && children(isOpen)}
        </div>
    )
}
