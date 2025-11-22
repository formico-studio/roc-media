import ShinyButton from '@/components/ui/shiny-button'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'

export default function CTASection() {
	return (
		<section className='bg-primary w-full flex items-center justify-center min-h-[320px] px-2 md:px-0 relative py-12'>
			<div className='w-full max-w-2xl flex flex-col items-center relative z-10 text-center'>
				{/* Pre-headline */}
				<p className='text-secondary text-sm md:text-base font-medium tracking-widest mb-2 uppercase font-neue-montreal'>
					READY TO ELEVATE YOUR BRAND
				</p>

				{/* Headline */}
				<h2 className='text-white text-center text-3xl md:text-6xl font-black-mango font-bold mb-6 leading-tight relative z-10'>
					Contact <span className='text-secondary'>Us</span> <span className='text-secondary'>!</span>
				</h2>

				{/* CTA Button */}
				<a
					href="https://forms.gle/kdhx6T4DFVSu1mvL9"
					target="_blank"
					rel="noopener noreferrer"
					className="block"
				>
					<ShinyButton
						className='bg-secondary text-primary font-neue-montreal font-semibold text-base md:text-lg px-8 py-3 rounded-full shadow-md min-w-[160px] text-center tracking-wide border-0'
						overlayShineColor="#ffffff"
					>
						Get Started
					</ShinyButton>
				</a>

				{/* Separator */}
				<div className="w-full max-w-[200px] h-px bg-white/20 my-6"></div>

				{/* Social Proof */}
				<p className='text-white/80 text-xs md:text-sm font-neue-montreal max-w-md text-center mb-8'>
					Join 100+ brands that transformed their vision into visual excellence
				</p>

				{/* Social Links */}
				<div className="flex flex-col items-center gap-3">
					<p className="text-white/60 text-xs md:text-sm font-neue-montreal uppercase tracking-wider">
						Find us on :
					</p>
					<div className="flex items-center gap-6">
						<a href="https://www.instagram.com/rocmedia.in/" className="text-white/80 hover:text-secondary transition-colors duration-300 hover:scale-110 transform">
							<FaInstagram size={24} />
						</a>
						<a href="https://www.fiverr.com/s/o8mzaKb" className="text-white/80 hover:text-secondary transition-colors duration-300 hover:scale-110 transform">
							<SiFiverr size={42} />
						</a>
						<a href="https://www.linkedin.com/company/rohitoncreation/" className="text-white/80 hover:text-secondary transition-colors duration-300 hover:scale-110 transform">
							<FaLinkedin size={24} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
