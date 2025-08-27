import ShinyButton from '@/components/ui/shiny-button'

const PHONE_NUMBER = '+91 74287 18464'
const PHONE_TEL = '+917428718464'

export default function CTASection () {
	const handlePhoneCall = () => {
		window.location.href = `tel:${PHONE_TEL}`
	}

	return (
		<section 
			className='bg-primary w-full flex items-center justify-center min-h-[320px] px-2 md:px-0 relative cursor-pointer'
			onClick={handlePhoneCall}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault()
					handlePhoneCall()
				}
			}}
			aria-label={`Call ${PHONE_NUMBER}`}
		>
			<div className='w-full max-w-2xl flex flex-col items-center relative z-10'>
				{/* Headline */}
				<h2 className='text-white text-center text-3xl md:text-6xl font-black-mango font-bold mb-4 leading-tight relative z-10'>
				Call Us <span className='text-secondary'>Now</span>  <span className='text-secondary'>!</span>
				</h2>

				{/* Phone number display */}
				<ShinyButton 
					className='bg-secondary text-primary font-neue-montreal font-semibold text-base md:text-lg px-5 py-1.5 rounded-full shadow-md min-w-[160px] text-center tracking-wide border-0'
					overlayShineColor="#ffffff"
				>
					{PHONE_NUMBER}
				</ShinyButton>
			</div>
		</section>
	)
}
