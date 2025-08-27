import { useEffect, useMemo, useState, useRef } from 'react'
import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerControlBar,
	//VideoPlayerTimeRange,
	VideoPlayerSeekBackwardButton,
	VideoPlayerSeekForwardButton,
	VideoPlayerMuteButton,
	VideoPlayerClickOverlay,
} from '@/components/ui/kibo-ui/video-player'

const categories = {
	carinfo: {
		title: 'CarInfo Campaign',
		orientation: 'landscape',
		videos: [
			{ title: 'Creator Spotlight', url: '@reels/carinfo/car-info-1.mp4', thumbnail: '@reels/carinfo/1.webp' },
			{ title: 'How It Works', url: '@reels/carinfo/car-info-2.mp4', thumbnail: '@reels/carinfo/2.webp' },
		],
	},
	kroslo: {
		title: 'Kroslo Campaign',
		orientation: 'portrait',
		videos: [
			{ title: 'Brand Trailer', url: '@reels/kroslo/kroslo-5.mp4', thumbnail: '@reels/kroslo/5.webp' },
			{ title: 'Feature Highlight', url: '@reels/kroslo/kroslo-6.mp4', thumbnail: '@reels/kroslo/6.webp' },
			{ title: 'Customer Stories', url: '@reels/kroslo/kroslo-3.mp4', thumbnail: '@reels/kroslo/3.webp' },
			{ title: 'Quick Tips', url: '@reels/kroslo/kroslo-4.mp4', thumbnail: '@reels/kroslo/4.webp' },
			{ title: 'Behind The Scenes', url: '@reels/kroslo/kroslo-1.mp4', thumbnail: '@reels/kroslo/1.webp' },
			{ title: 'Customer Stories', url: '@reels/kroslo/kroslo-2.mp4', thumbnail: '@reels/kroslo/2.webp' }
		],
	},
	findmykid: {
		title: 'FindMyKid Campaign',
		orientation: 'portrait',
		videos: [
			{ title: 'App Walkthrough', url: '@reels/findmykid/1.mp4', thumbnail: '@reels/findmykid/1.webp' },
			{ title: 'Use Cases', url: '@reels/findmykid/2.mp4', thumbnail: '@reels/findmykid/2.webp' },
			{ title: 'Trust & Security', url: '@reels/findmykid/3.mp4', thumbnail: '@reels/findmykid/3.webp' },
			{ title: 'Safety Tips', url: '@reels/findmykid/4.mp4', thumbnail: '@reels/findmykid/4.webp' },
			{ title: 'Safety Tips', url: '@reels/findmykid/5.mp4', thumbnail: '@reels/findmykid/5.webp' },
		],
	},
} as const

export type PortfolioCategory = keyof typeof categories

export interface PortfolioProps {
	activeCategory: PortfolioCategory
}

// Map all reel and image assets to resolved URLs so alias strings can be used in data
const reelModules = import.meta.glob('/src/assets/reels/**/*.{mp4,webm,ogg,webp,png,jpg,jpeg}', {
	eager: true,
	import: 'default',
}) as Record<string, string>

function resolveReelUrl (maybeAliasUrl: string): string {
	if (!maybeAliasUrl.startsWith('@reels/')) return maybeAliasUrl
	const key = maybeAliasUrl.replace(
		'@reels/',
		'/src/assets/reels/'
	)
	return reelModules[key] ?? maybeAliasUrl
}

// Reusable Video Player Component
interface PortfolioVideoPlayerProps {
	videoUrl: string
	className?: string
	orientation?: 'landscape' | 'portrait'
	isCenter?: boolean
    posterUrl?: string
}

function PortfolioVideoPlayer({ videoUrl, className, orientation = 'landscape', isCenter = false, posterUrl }: PortfolioVideoPlayerProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isInView, setIsInView] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const node = containerRef.current
		if (!node) return

		// eslint-disable-next-line no-console
		console.log('[PortfolioVideoPlayer] observe start', { videoUrl })

		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						// eslint-disable-next-line no-console
						console.log('[PortfolioVideoPlayer] in-view', { videoUrl })
						setIsInView(true)
						observer.unobserve(entry.target)
					}
				}
			},
			{ rootMargin: '200px 0px', threshold: 0.1 }
		)

		observer.observe(node)
		return () => {
			// eslint-disable-next-line no-console
			console.log('[PortfolioVideoPlayer] observer disconnected', { videoUrl })
			observer.disconnect()
		}
	}, [])

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('[PortfolioVideoPlayer] isInView changed', { videoUrl, isInView })
	}, [isInView, videoUrl])

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play()
				setIsPlaying(true)
			} else {
				videoRef.current.pause()
				setIsPlaying(false)
			}
		}
	}

	const handleVideoEnded = () => {
		// eslint-disable-next-line no-console
		console.log('[PortfolioVideoPlayer] ended', { videoUrl })
		setIsPlaying(false)
	}

	const handleVideoPlay = () => {
		// eslint-disable-next-line no-console
		console.log('[PortfolioVideoPlayer] play', { videoUrl })
		setIsPlaying(true)
	}

	const handleVideoPause = () => {
		// eslint-disable-next-line no-console
		console.log('[PortfolioVideoPlayer] pause', { videoUrl })
		setIsPlaying(false)
	}

	return (
		<div ref={containerRef} className={className}>
			{isInView ? (
				<VideoPlayer className='w-full h-full'>
					<VideoPlayerContent
						ref={videoRef}
						src={videoUrl}
						poster={posterUrl}
						preload="metadata"
						onEnded={handleVideoEnded}
						onPlay={handleVideoPlay}
						onPause={handleVideoPause}
					/>
					<VideoPlayerClickOverlay />
					<div 
						onClick={handlePlayPause}
						className="absolute inset-0 z-5 cursor-pointer"
						style={{ WebkitTapHighlightColor: 'transparent' }}
					/>
					<VideoPlayerMuteButton />
					{/*<VideoPlayerTimeRange />*/}
					{!isPlaying && (
						<div 
							onClick={handlePlayPause}
							className={`
								absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
								cursor-pointer transition-all duration-200 ease-out
								${orientation === 'landscape' 
									? isCenter 
										? 'w-16 h-16 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 hover:scale-105' 
										: 'w-12 h-12 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 hover:scale-105'
									: isCenter 
										? 'w-20 h-20 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 hover:scale-105' 
										: 'w-16 h-16 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 hover:scale-105'
								}
								flex items-center justify-center backdrop-blur-sm
							`}
						>
							<svg
								width={orientation === 'landscape' 
									? isCenter ? '22' : '18'
									: isCenter ? '28' : '22'
								}
								height={orientation === 'landscape' 
									? isCenter ? '22' : '18'
									: isCenter ? '28' : '22'
								}
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='text-white ml-0.5'
							>
								<path d='M8 5v14l11-7L8 5z' fill='currentColor' />
							</svg>
						</div>
					)}
					{orientation === 'landscape' && (
						<VideoPlayerControlBar>
							<VideoPlayerSeekBackwardButton />
							<VideoPlayerSeekForwardButton />
						</VideoPlayerControlBar>
					)}
				</VideoPlayer>
			) : (
				<div className='w-full h-full bg-gray-100 animate-pulse' />
			)}
		</div>
	)
}

export default function Portfolio ({ activeCategory }: PortfolioProps) {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		setIsVisible(false)
		const id = setTimeout(() => setIsVisible(true), 50)
		return () => clearTimeout(id)
	}, [activeCategory])

	const data = useMemo(() => {
		const fallback: PortfolioCategory = 'carinfo'
		const key = (activeCategory in categories
			? activeCategory
			: fallback) as PortfolioCategory
		return categories[key]
	}, [activeCategory])

	return (
		<section className='w-full' key={activeCategory}>
			<div
				className={[
					'max-w-6xl mx-auto px-6 py-10 md:py-14',
					'transition-opacity duration-300',
					isVisible ? 'opacity-100' : 'opacity-0',
				].join(' ')}>
				<h2 className='text-center font-black-mango text-4xl md:text-5xl text-primary'>
					{data.title}
				</h2>

				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{data.videos.map(video => (
						<div
							key={`${activeCategory}-${video.url}`}
							className='group rounded-2xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] transform transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary'
						>
							<div
								className={[
									'relative rounded-2xl overflow-hidden',
									data.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-[16/9]',
								].join(' ')}
							>
								<PortfolioVideoPlayer 
									videoUrl={resolveReelUrl(video.url)}
									className="w-full h-full"
									orientation={data.orientation}
									isCenter={false}
									posterUrl={video.thumbnail ? resolveReelUrl(video.thumbnail) : undefined}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
 