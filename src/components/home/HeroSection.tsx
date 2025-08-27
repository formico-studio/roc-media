import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerPlayButton,
	VideoPlayerTimeRange,
	VideoPlayerMuteButton,
	VideoPlayerClickOverlay,
} from '@/components/ui/kibo-ui/video-player'
import ShinyButton from '@/components/ui/shiny-button'

export default function HeroSection() {
	const navigate = useNavigate()

	return (
		<section className="bg-primary text-white flex flex-col pb-16 md:pb-20 md:min-h-screen">
			<header className="w-full">
				{/* Desktop Navigation */}
				<div className="hidden md:block max-w-6xl mx-auto py-16">
					<div className="flex items-center justify-between">
						<div className="flex items-center select-none">
							<img src="/roc.webp" alt="ROC" className="h-8 w-auto object-contain" />
						</div>

						<nav className="flex items-center space-x-32 text-base absolute left-1/2 transform -translate-x-1/2">
							<Link to='/' className="cursor-pointer hover:opacity-80">Home</Link>
							<Link to='/our-work' className="cursor-pointer hover:opacity-80">Our Work</Link>
							<Link to='/our-teams' className="cursor-pointer hover:opacity-80">Our Team</Link>
						</nav>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden">
					{/* Mobile Header with generous spacing */}
					<div className="flex flex-col items-center py-12 px-6">
						{/* Logo centered with more space */}
						<div className="flex items-center select-none mb-10">
							<img src="/roc.webp" alt="ROC" className="h-8 w-auto object-contain" />
						</div>
						
						{/* Navigation buttons with more space and professional styling */}
						<nav className="flex items-center justify-center space-x-8 text-base font-neue-montreal">
							<Link to='/' className="cursor-pointer hover:opacity-80 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
								Home
							</Link>
							<Link to='/our-work' className="cursor-pointer hover:opacity-80 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
								Our Work
							</Link>
							<Link to='/our-teams' className="cursor-pointer hover:opacity-80 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium">
								Our Team
							</Link>
						</nav>
					</div>
				</div>
			</header>

			<main className="flex-1">
				<div className="max-w-6xl mx-auto px-4">
					<h1 className="mt-0 md:mt-2 text-center font-black-mango font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
						<span className="text-white">Content that </span>
						<span className="relative inline-block text-secondary">
							Converts
							<svg
								className="absolute left-0 right-0 -bottom-2 w-full h-4"
								viewBox="0 0 400 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 12C120 12 180 3 395 12"
									stroke="currentColor"
									strokeWidth="4"
									strokeLinecap="round"
									opacity="0.9"
								/>
							</svg>
						</span>
					</h1>

					<div className="mt-6 md:mt-8">
						<div className="w-full max-w-3xl mx-auto">
							{/* Video Container with Border */}
							<div className="relative w-full aspect-[16/9] border-4 border-white overflow-hidden">
								{/* Video Player with transparent overlay controls */}
								<VideoPlayer className="w-full h-full relative">
									<VideoPlayerContent
										className="w-full h-full object-cover"
										preload="auto"
										playsInline
										autoPlay
										muted
										crossOrigin=""
										slot="media"
										src="/vsl.mp4"
									/>
									
									{/* Clickable overlay for mobile play/pause */}
									<VideoPlayerClickOverlay />
									
									{/* Centered Play Button (CSS-hidden while playing) */}
									<VideoPlayerPlayButton
										title=""
										className="centered-play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-16 h-16 rounded-full bg-black/70 hover:bg-black/80 text-white flex items-center justify-center shadow-lg ring-2 ring-white/70 pointer-events-auto transition"
										style={{ ['--media-button-icon-width']: '32px', ['--media-button-icon-height']: '32px', ['--media-control-display']: 'block', ['--media-icon-color']: '#ffffff' } as any}
									/>
									
									{/* Built-in Mute Button (top-right circle) */}
									<VideoPlayerMuteButton />
									
									{/* Timeline at bottom border */}
									<VideoPlayerTimeRange />
								</VideoPlayer>
							</div>
						</div>
					</div>

					<div className="mt-6 md:mt-8 flex flex-col items-center justify-center space-y-4">
						<ShinyButton 
							onClick={() => (window.location.href = 'tel:+917428718464')}
							className="bg-secondary text-primary font-neue-montreal font-bold rounded-full px-10 md:px-12 py-4 border-0 shadow-lg"
							shineColor="#ffffff"
							overlayShineColor="#ffffff"
						>
							Call Us Now
						</ShinyButton>
						<button className="group inline-flex items-center space-x-2 text-white hover:opacity-80" onClick={() => navigate('/our-work')}>
							<span className="font-neue-montreal">View Our Work</span>
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</button>
					</div>
				</div>
			</main>
		</section>
	)
}


