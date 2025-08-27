import { useState } from 'react'

interface UpperProps {
	onCategoryChange?: (category: string) => void
}

const categories = ['CarInfo', 'Kroslo', 'FindMyKid'] as const

export default function Upper ({ onCategoryChange }: UpperProps) {
	const [activeCategory, setActiveCategory] = useState<string>('CarInfo')

	function handleCategoryClick (category: string) {
		setActiveCategory(category)
		if (onCategoryChange) onCategoryChange(category)
	}

	return (
		<section className='w-full bg-primary text-white'>
			<div className='max-w-6xl mx-auto px-6 pt-3 md:pt-4 pb-10 md:pb-14'>
				{/* Top bar: Centered logo with back button aligned to its vertical center */}
				<div className='relative flex items-center justify-center min-h-[56px]'>
					<a
						href='/'
						className='absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-white font-neue-montreal hover:underline text-sm md:text-base'
						aria-label='Back to Home'
					>
						<span aria-hidden className='text-lg md:text-xl'>←</span>
						<span>Back to Home</span>
					</a>

					
				</div>

				{/* Spacing below logo/back row */}
				<div className='mt-6 md:mt-8' />

				<h1 className='text-center font-black-mango uppercase text-5xl md:text-7xl'>
					OUR PORTFOLIO
				</h1>
				<p className='mt-6 md:mt-7 text-center text-white/85 max-w-[900px] mx-auto font-neue-montreal text-lg md:text-xl'>
					Discover our creative video solutions that transform brands and drive
					results
				</p>

				{/* Category selector with subtle light background behind buttons */}
				<div className='mt-12 md:mt-16 flex justify-center'>
					<div className='bg-white/10 border border-white/10 rounded-3xl p-2 md:p-3 shadow-lg backdrop-blur-sm overflow-x-auto'>
						<div className='flex gap-2 md:gap-3 px-1 md:px-2 whitespace-nowrap'>
							{categories.map(category => {
								const isActive = category === activeCategory
								return (
									<button
										key={category}
										type='button'
										onClick={() => handleCategoryClick(category)}
										aria-pressed={isActive}
										className={[
											'whitespace-nowrap rounded-md px-3 md:px-4 py-1 md:py-1.5',
											'font-neue-montreal font-semibold text-xs md:text-sm',
											'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus-visible:ring-offset-primary',
											isActive
												? 'bg-secondary text-primary border border-transparent'
												: 'bg-transparent text-white border border-white hover:bg-white/10',
										].join(' ')}
									>
										{category}
									</button>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}