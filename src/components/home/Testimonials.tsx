import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

// Custom star component for partial rating
const PartialStar = ({ fillPercentage }: { fillPercentage: number }) => {
	return (
		<div className="relative w-4 h-4">
			{/* Base star (outlined) */}
			<Star className="w-4 h-4 text-secondary" />
			{/* Filled star (clipped) */}
			<div
				className="absolute inset-0 overflow-hidden"
				style={{ width: `${fillPercentage}%` }}
			>
				<Star className="w-4 h-4 text-secondary fill-current" />
			</div>
		</div>
	);
};

// Testimonial Card Component
const TestimonialCard = ({
	name,
	company,
	testimonial,
	rating,
	avatar,
}: {
	name: string;
	company: string;
	testimonial: string;
	rating: number;
	avatar: string;
}) => {
	return (
		<Card className="w-72 h-52 bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex-shrink-0">
			<CardContent className="p-2 h-full flex flex-col">
				{/* Header: Avatar + Client Info */}
				<div className="flex-shrink-0 mb-1.5">
					<div className="flex items-start justify-between">
						<div className="flex items-start gap-2 flex-1">
							{/* Small Avatar */}
							<div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
								<img
									src={avatar}
									alt={name}
									className="w-full h-full object-cover"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1d3269&color=ffffff&size=32`;
									}}
								/>
							</div>
							{/* Name and Company */}
							<div className="flex-1 min-w-0">
								<h4 className="font-neue-montreal-bold text-primary text-sm leading-tight truncate">{name}</h4>
								<p className="text-xs text-gray-500 font-neue-montreal-regular truncate">{company}</p>
							</div>
						</div>
						{/* Stars */}
						<div className="flex gap-0.5 ml-2 flex-shrink-0">
							{[...Array(rating)].map((_, i) => (
								<Star key={i} className="w-3 h-3 text-secondary fill-current" />
							))}
						</div>
					</div>
				</div>

				{/* Minimal separator */}
				<div className="border-t border-gray-100 mb-1.5 flex-shrink-0"></div>

				{/* Testimonial Text - Uses all remaining space with proper ellipsis */}
				<div className="flex-grow overflow-hidden">
					<p className="testimonial-text text-gray-700 font-neue-montreal-regular text-sm">
						<span className="text-primary font-medium">"</span>
						{testimonial}
						<span className="text-primary font-medium">"</span>
					</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default function TestimonialsSection() {
	const testimonials = [
		{
			name: "Idankr",
			company: "Israel",
			avatar: "#",
			testimonial:
				"Rohit wend above and beyond in delivering us a great UGC video, helping us addressing the Indian market. top work !!",
			rating: 5,
		},
		{
			name: "M Chanaoui",
			company: "Morocco",
			avatar: "#",
			testimonial:
				"Rohit truly IMPRESSED me with their spokesperson video, going above and beyond with a visually stunning presentation and meticulous attention to detail. Their proactive communication and fluency made working with them a BREEZE, and they delivered the project promptly. Highly recommended! 👏",
			rating: 5,
		},
		{
			name: "Vipin",
			company: "India",
			avatar: "#",
			testimonial:
				"Rohit was very cooperative and went out of way to help in creating the UGC video and his behaviour was professional and overall experiance was fabulous.",
			rating: 5,
		},
		{
			name: "Team Parlo",
			company: "Parlo London",
			avatar: "#",
			testimonial:
				"This was our second successful project with Rohitoncreation. He is an absolute pleasure to work with, always exceeding expectations. His video editing skills are top-notch.",
			rating: 5,
		},
		{
			name: "MK Guttedar",
			company: "India",
			avatar: "#",
			testimonial:
				"Absolutely Outstanding Experience! I couldn\’t be happier with the service I received! The seller was professional, responsive, and truly went above and beyond my expectations. The quality of the work was top-notch — delivered on time, exactly as described, and with great attention to detail. Communication was smooth throughout the entire process, and any revisions I requested were handled quickly and professionally. If you're looking for someone reliable and skilled, look no further. I highly recommend this gig to anyone who values quality and wants a stress-free experience. I\’ll definitely be coming back for more!",
			rating: 5,
		},
		{
			name: "Clint",
			company: "United States",
			avatar: "#",
			testimonial:
				"Rohitoncreation did an OUTSTANDING job—professional, detail-oriented, and went above and beyond! His quick responsiveness and collaborative attitude made the process seamless and enjoyable. Highly recommend working with him!",
			rating: 5,
		},
		{
			name: "zeoadsio",
			company: "India",
			avatar: "#",
			testimonial:
				"hey, I tried Rohit's UGC videos. we got 4 videos from him and the videos are firstly exceptional with hook and good quality. and secondly these are getting us very good results. keep up the good work! will place new order soon!",
			rating: 5,
		},
		{
			name: "Rayan",
			company: "India",
			avatar: "#",
			testimonial:
				"I've had the privilege of working with one of the most talented editors who truly understands my vision and style. They not only edit, shoot, and record videos exactly according to my needs but also ensure that all my requirements are seamlessly incorporated into the final product. Their patience is commendable—they never lose their cool, even when I request multiple changes or suggest re-editing an entire video from scratch. They are always available on time for calls and deliver updates promptly.",
			rating: 5,
		},
	];

	// Split testimonials into two rows for the marquee effect
	const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
	const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

	return (
		<section className="py-20 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-neue-montreal-bold text-primary mb-4">
						What Our Clients Say
					</h2>
					<p className="text-xl text-primary mb-8 font-neue-montreal-regular">Trusted by 100+ brands worldwide</p>

					{/* Trust indicator */}
					<div className="inline-flex flex-col items-center justify-center gap-2 bg-primary rounded-lg px-6 py-3 text-white shadow-lg">
						<div className="flex gap-1">
							{[...Array(4)].map((_, i) => (
								<Star key={i} className="w-4 h-4 text-secondary fill-current" />
							))}
							<PartialStar fillPercentage={80} />
						</div>
						<span className="text-sm font-neue-montreal-regular">4.8/5 Average Rating</span>
					</div>
				</div>

				{/* Marquee Testimonials */}
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
					{/* First row - left to right */}
					<Marquee pauseOnHover className="[--duration:25s] mb-4">
						{firstRow.map((testimonial, index) => (
							<div key={index} className="mx-2">
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</Marquee>

					{/* Second row - right to left (opposite direction) */}
					<Marquee reverse pauseOnHover className="[--duration:35s]">
						{secondRow.slice().reverse().map((testimonial, index) => (
							<div key={index} className="mx-2">
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</Marquee>

					{/* Gradient overlays for smooth edges */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
					<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
				</div>
			</div>
		</section>
	);
} 