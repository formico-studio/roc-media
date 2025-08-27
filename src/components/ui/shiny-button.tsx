import { cn } from '@/lib/utils'
import { motion, type MotionProps } from 'motion/react'
import React from 'react'

const animationProps = {
	initial: { '--x': '-100%', scale: 0.95 },
	animate: { '--x': '100%', scale: 1 },
	whileTap: { scale: 0.98 },
	transition: {
		repeat: Infinity,
		repeatType: 'loop' as const,
		repeatDelay: 0.6,
		type: 'spring' as const,
		stiffness: 24,
		damping: 18,
		mass: 1.2,
		scale: { type: 'spring' as const, stiffness: 240, damping: 12, mass: 0.6 },
	},
} satisfies MotionProps

export interface ShinyButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
		MotionProps {
	children: React.ReactNode
	className?: string
	shineColor?: string
	overlayShineColor?: string
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
	({ children, className, shineColor = '#ffffff', overlayShineColor = '#ffffff', style, ...props }, ref) => {
		return (
			<motion.button
				ref={ref}
				className={cn(
					'relative cursor-pointer overflow-hidden',
					className,
				)}
				{...animationProps}
				{...props}
			>
				{/* Button content */}
				<span className="relative z-10 block w-full h-full">
					{children}
				</span>
				
				{/* Shine effect overlay */}
				<motion.div
					className="absolute inset-0 z-20 pointer-events-none"
					style={{
						background: `linear-gradient(45deg, 
							transparent 0%, 
							rgba(255, 255, 255, 0.1) 20%, 
							rgba(255, 255, 255, 0.6) 40%, 
							rgba(255, 255, 255, 0.1) 60%, 
							transparent 80%)`,
						transform: 'translateX(var(--x))',
						filter: 'blur(2px)',
					}}
				/>
			</motion.button>
		)
	},
)

ShinyButton.displayName = 'ShinyButton'

export default ShinyButton


