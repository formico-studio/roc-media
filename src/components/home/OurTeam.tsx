import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerPlayButton,
	VideoPlayerTimeRange,
	VideoPlayerMuteButton,
	VideoPlayerClickOverlay,
} from '@/components/ui/kibo-ui/video-player'

export default function OurTeam() {
	return (
		<section className="bg-primary py-16 lg:py-20">
			<div className="max-w-6xl mx-auto px-4">
				{/* Section Title */}
				<h2 className="text-3xl lg:text-4xl font-neue-montreal-bold text-white text-center mb-16 lg:mb-20 tracking-wide">
					Our Team
				</h2>

				{/* Video Container */}
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
								src="/team.mp4"
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
		</section>
	)
}

