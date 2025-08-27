import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerPlayButton,
	VideoPlayerTimeRange,
	VideoPlayerMuteButton,
	VideoPlayerClickOverlay,
} from '@/components/ui/kibo-ui/video-player'
import preProdImg from '@/assets/images/pre-prod-img.webp'

export default function OurExpertise() {
	return (
		<section className="bg-primary py-16 lg:py-20">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<h2 className="text-3xl lg:text-4xl font-neue-montreal-bold text-white text-center mb-16 lg:mb-20 tracking-wide">
					Our Expertise
				</h2>

				{/* Expertise Blocks */}
				<div className="space-y-16 lg:space-y-20">
					{/* First Block - Pre Production */}
					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
						{/* Left Side - Image */}
						<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
							<div className="border-4 border-secondary w-full max-w-md aspect-video overflow-hidden">
								<img
									src={preProdImg}
									alt="Pre Production - Scripting, Storyboard and Recording"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Right Side - Text */}
						<div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-center">
							<h3 className="text-3xl lg:text-4xl font-neue-montreal-bold">
								<span className="text-secondary">Pre</span>
								<span className="text-white"> Production</span>
							</h3>
							<p className="text-white text-lg lg:text-xl opacity-90 font-neue-montreal-regular">
								( Scripting, Storyboard and Recording )
							</p>
						</div>
					</div>

					{/* Second Block - Post Production */}
					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
						{/* Left Side - Text */}
						<div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-center order-2 lg:order-1">
							<h3 className="text-3xl lg:text-4xl font-neue-montreal-bold">
								<span className="text-secondary">Post</span>
								<span className="text-white"> Production</span>
							</h3>
							<p className="text-white font-neue-montreal text-lg lg:text-xl opacity-90 font-neue-montreal-regular">
								( Editing and Motion graphics )
							</p>
						</div>

						{/* Right Side - Video */}
						<div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
							<div className="border-4 border-secondary w-full max-w-md aspect-video overflow-hidden relative">
								<VideoPlayer className="w-full h-full relative">
									<VideoPlayerContent
										id="post-production-video"
										poster="/post-prod.webp"
										className="w-full h-full object-cover"
										preload="auto"
										playsInline
										crossOrigin=""
										slot="media"
										src="/post-production.mp4"
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
				</div>
			</div>
		</section>
	)
}
